import { expect, onTestFinished, test } from "vitest";

import { GenericResult_GenericStatus } from "../proto/modal_proto/api";

const emptyLogsResponse = (expectedId: string) => (req: any) => {
  expect(req).toMatchObject({ sandboxId: expectedId });
  return [
    {
      entryId: req.lastEntryId ?? "0-0",
      items: [],
      eof: true,
    },
  ];
};

test("experimentalSnapshot requires opt-in", async () => {
  const { MockGrpc } = await import("../test-support/grpc_mock");
  const mock = await MockGrpc.install();
  onTestFinished(async () => {
    await mock.uninstall();
  });

  const { Sandbox } = await import("modal");
  mock.handleUnary(
    "/modal.client.ModalClient/SandboxGetLogs",
    emptyLogsResponse("sb-no-snapshot"),
  );
  mock.handleUnary(
    "/modal.client.ModalClient/SandboxGetLogs",
    emptyLogsResponse("sb-no-snapshot"),
  );
  const sandbox = new Sandbox("sb-no-snapshot");

  await expect(sandbox.experimentalSnapshot()).rejects.toThrow(
    "Memory snapshots are not supported",
  );
});

test("experimentalSnapshot succeeds when enabled", async () => {
  const { MockGrpc } = await import("../test-support/grpc_mock");
  const mock = await MockGrpc.install();
  onTestFinished(async () => {
    await mock.uninstall();
  });

  mock.handleUnary("/modal.client.ModalClient/SandboxGetTaskId", (req) => {
    expect(req).toMatchObject({ sandboxId: "sb-enabled" });
    return { taskId: "task-123" };
  });
  mock.handleUnary("/modal.client.ModalClient/SandboxSnapshot", (req) => {
    expect(req).toMatchObject({ sandboxId: "sb-enabled" });
    return { snapshotId: "sn-123" };
  });
  mock.handleUnary("/modal.client.ModalClient/SandboxSnapshotWait", (req) => {
    expect(req).toMatchObject({ snapshotId: "sn-123", timeout: 55 });
    return {
      result: {
        status: GenericResult_GenericStatus.GENERIC_STATUS_SUCCESS,
      },
    };
  });

  const { Sandbox } = await import("modal");
  mock.handleUnary(
    "/modal.client.ModalClient/SandboxGetLogs",
    emptyLogsResponse("sb-enabled"),
  );
  mock.handleUnary(
    "/modal.client.ModalClient/SandboxGetLogs",
    emptyLogsResponse("sb-enabled"),
  );
  const sandbox = new Sandbox("sb-enabled", {
    memorySnapshotsEnabled: true,
  });

  const snapshot = await sandbox.experimentalSnapshot();
  expect(snapshot.snapshotId).toBe("sn-123");
});

test("experimentalFromSnapshot restores a sandbox", async () => {
  const { MockGrpc } = await import("../test-support/grpc_mock");
  const mock = await MockGrpc.install();
  onTestFinished(async () => {
    await mock.uninstall();
  });

  mock.handleUnary("/modal.client.ModalClient/SandboxSnapshotGet", (req) => {
    expect(req).toMatchObject({ snapshotId: "sn-existing" });
    return {};
  });

  const { Sandbox, SandboxSnapshot } = await import("modal");
  const snapshot = await SandboxSnapshot.fromId("sn-existing");

  mock.handleUnary("/modal.client.ModalClient/SandboxRestore", (req) => {
    expect(req).toMatchObject({ snapshotId: "sn-existing" });
    return { sandboxId: "sb-restored" };
  });
  mock.handleUnary("/modal.client.ModalClient/SandboxGetTaskId", (req) => {
    expect(req).toMatchObject({
      sandboxId: "sb-restored",
      waitUntilReady: true,
      timeout: 55,
    });
    return { taskId: "task-restored" };
  });

  mock.handleUnary(
    "/modal.client.ModalClient/SandboxGetLogs",
    emptyLogsResponse("sb-restored"),
  );
  mock.handleUnary(
    "/modal.client.ModalClient/SandboxGetLogs",
    emptyLogsResponse("sb-restored"),
  );

  const restored = await Sandbox.experimentalFromSnapshot(snapshot);

  mock.handleUnary("/modal.client.ModalClient/SandboxGetTaskId", (req) => {
    expect(req).toMatchObject({ sandboxId: "sb-restored" });
    return { taskId: "task-restored" };
  });
  mock.handleUnary("/modal.client.ModalClient/SandboxSnapshot", (req) => {
    expect(req).toMatchObject({ sandboxId: "sb-restored" });
    return { snapshotId: "sn-restored" };
  });
  mock.handleUnary("/modal.client.ModalClient/SandboxSnapshotWait", (req) => {
    expect(req).toMatchObject({ snapshotId: "sn-restored", timeout: 55 });
    return {
      result: {
        status: GenericResult_GenericStatus.GENERIC_STATUS_SUCCESS,
      },
    };
  });

  const newSnapshot = await restored.experimentalSnapshot();
  expect(newSnapshot.snapshotId).toBe("sn-restored");
});
