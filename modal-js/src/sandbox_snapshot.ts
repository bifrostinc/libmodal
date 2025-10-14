import { client } from "./client";

/**
 * Represents a memory snapshot of a Sandbox.
 */
export class SandboxSnapshot {
  readonly snapshotId: string;

  constructor(snapshotId: string) {
    this.snapshotId = snapshotId;
  }

  static async fromId(snapshotId: string): Promise<SandboxSnapshot> {
    await client.sandboxSnapshotGet({ snapshotId });
    return new SandboxSnapshot(snapshotId);
  }
}
