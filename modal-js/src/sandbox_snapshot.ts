import { getDefaultClient, ModalClient } from "./client";

/**
 * Represents a memory snapshot of a Sandbox.
 * This is an experimental feature.
 */
export class SandboxSnapshot {
  readonly snapshotId: string;

  /** @ignore */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(client: ModalClient, snapshotId: string) {
    this.snapshotId = snapshotId;
  }

  /**
   * @deprecated Use {@link SandboxSnapshotService#fromId client.sandboxSnapshots.fromId()} instead.
   */
  static async fromId(snapshotId: string): Promise<SandboxSnapshot> {
    return getDefaultClient().sandboxSnapshots.fromId(snapshotId);
  }
}

/**
 * Service for managing {@link SandboxSnapshot}s.
 *
 * Normally only ever accessed via the client as:
 * ```typescript
 * const modal = new ModalClient();
 * const snapshot = await modal.sandboxSnapshots.fromId("...");
 * ```
 */
export class SandboxSnapshotService {
  readonly #client: ModalClient;

  constructor(client: ModalClient) {
    this.#client = client;
  }

  /**
   * Get a {@link SandboxSnapshot} by ID.
   */
  async fromId(snapshotId: string): Promise<SandboxSnapshot> {
    await this.#client.cpClient.sandboxSnapshotGet({ snapshotId });
    return new SandboxSnapshot(this.#client, snapshotId);
  }
}
