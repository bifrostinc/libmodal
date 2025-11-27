import { Client, Status, ClientMiddleware } from 'nice-grpc';
import { BinaryWriter, BinaryReader } from '@bufbuild/protobuf/wire';

/**
 * A generic empty message that you can re-use to avoid defining duplicated
 * empty messages in your APIs. A typical example is to use it as the request
 * or the response type of an API method. For instance:
 *
 *     service Foo {
 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
 *     }
 *
 * The JSON representation for `Empty` is empty JSON object `{}`.
 */
interface Empty {
}
declare const Empty: MessageFns$1<Empty>;
type Builtin$1 = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial$1<T> = T extends Builtin$1 ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial$1<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$1<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial$1<T[K]>;
} : Partial<T>;
interface MessageFns$1<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create(base?: DeepPartial$1<T>): T;
    fromPartial(object: DeepPartial$1<T>): T;
}

declare enum AppDeployVisibility {
    APP_DEPLOY_VISIBILITY_UNSPECIFIED = 0,
    APP_DEPLOY_VISIBILITY_WORKSPACE = 1,
    APP_DEPLOY_VISIBILITY_PUBLIC = 2,
    UNRECOGNIZED = -1
}
declare enum AppDisconnectReason {
    APP_DISCONNECT_REASON_UNSPECIFIED = 0,
    APP_DISCONNECT_REASON_LOCAL_EXCEPTION = 1,
    APP_DISCONNECT_REASON_KEYBOARD_INTERRUPT = 2,
    APP_DISCONNECT_REASON_ENTRYPOINT_COMPLETED = 3,
    APP_DISCONNECT_REASON_DEPLOYMENT_EXCEPTION = 4,
    APP_DISCONNECT_REASON_REMOTE_EXCEPTION = 5,
    UNRECOGNIZED = -1
}
/**
 * NOTE: make sure to update the frontend if we add a new state here
 * https://github.com/modal-labs/modal/blob/main/frontend/src/routes/(dashboard)/%5B%5Bworkspace%5D%5D/apps/+page.svelte#L95
 */
declare enum AppState {
    APP_STATE_UNSPECIFIED = 0,
    /** APP_STATE_EPHEMERAL - Will be discharged when the client disconnects */
    APP_STATE_EPHEMERAL = 1,
    APP_STATE_DETACHED = 2,
    /** APP_STATE_DEPLOYED - Will be discharged when overwritten */
    APP_STATE_DEPLOYED = 3,
    /** APP_STATE_STOPPING - Winding down app due to user termination. */
    APP_STATE_STOPPING = 4,
    /** APP_STATE_STOPPED - Stopped */
    APP_STATE_STOPPED = 5,
    /** APP_STATE_INITIALIZING - App is created and in process of deployment. */
    APP_STATE_INITIALIZING = 6,
    /** APP_STATE_DISABLED - Same as stopped but prevented from being garbage collected */
    APP_STATE_DISABLED = 7,
    /** APP_STATE_DETACHED_DISCONNECTED - App is detached and local client has disconnected. */
    APP_STATE_DETACHED_DISCONNECTED = 8,
    /**
     * APP_STATE_DERIVED - App is derived from another workspace. Acts as a static, immutable group of functions.
     *
     * @deprecated
     */
    APP_STATE_DERIVED = 9,
    UNRECOGNIZED = -1
}
declare enum AppStopSource {
    APP_STOP_SOURCE_UNSPECIFIED = 0,
    APP_STOP_SOURCE_CLI = 1,
    APP_STOP_SOURCE_PYTHON_CLIENT = 2,
    APP_STOP_SOURCE_WEB = 3,
    UNRECOGNIZED = -1
}
declare enum CertificateStatus {
    CERTIFICATE_STATUS_PENDING = 0,
    CERTIFICATE_STATUS_ISSUED = 1,
    CERTIFICATE_STATUS_FAILED = 2,
    CERTIFICATE_STATUS_REVOKED = 3,
    UNRECOGNIZED = -1
}
declare enum CheckpointStatus {
    CHECKPOINT_STATUS_UNSPECIFIED = 0,
    CHECKPOINT_STATUS_PENDING = 1,
    CHECKPOINT_STATUS_PROCESSING = 2,
    CHECKPOINT_STATUS_READY = 3,
    CHECKPOINT_STATUS_FAILED = 4,
    UNRECOGNIZED = -1
}
declare enum CloudProvider {
    CLOUD_PROVIDER_UNSPECIFIED = 0,
    CLOUD_PROVIDER_AWS = 1,
    CLOUD_PROVIDER_GCP = 2,
    CLOUD_PROVIDER_AUTO = 3,
    CLOUD_PROVIDER_OCI = 4,
    UNRECOGNIZED = -1
}
declare enum DNSRecordType {
    DNS_RECORD_TYPE_A = 0,
    DNS_RECORD_TYPE_TXT = 1,
    DNS_RECORD_TYPE_CNAME = 2,
    UNRECOGNIZED = -1
}
/** Which data format a binary message is encoded with. */
declare enum DataFormat {
    DATA_FORMAT_UNSPECIFIED = 0,
    /** DATA_FORMAT_PICKLE - Cloudpickle */
    DATA_FORMAT_PICKLE = 1,
    /** DATA_FORMAT_ASGI - "Asgi" protobuf message */
    DATA_FORMAT_ASGI = 2,
    /** DATA_FORMAT_GENERATOR_DONE - "GeneratorDone" protobuf message */
    DATA_FORMAT_GENERATOR_DONE = 3,
    DATA_FORMAT_CBOR = 4,
    UNRECOGNIZED = -1
}
declare enum DeploymentNamespace {
    DEPLOYMENT_NAMESPACE_UNSPECIFIED = 0,
    DEPLOYMENT_NAMESPACE_WORKSPACE = 1,
    DEPLOYMENT_NAMESPACE_GLOBAL = 3,
    UNRECOGNIZED = -1
}
declare enum ExecOutputOption {
    EXEC_OUTPUT_OPTION_UNSPECIFIED = 0,
    EXEC_OUTPUT_OPTION_DEVNULL = 1,
    EXEC_OUTPUT_OPTION_PIPE = 2,
    EXEC_OUTPUT_OPTION_STDOUT = 3,
    UNRECOGNIZED = -1
}
declare enum FileDescriptor {
    FILE_DESCRIPTOR_UNSPECIFIED = 0,
    FILE_DESCRIPTOR_STDOUT = 1,
    FILE_DESCRIPTOR_STDERR = 2,
    FILE_DESCRIPTOR_INFO = 3,
    UNRECOGNIZED = -1
}
declare enum FunctionCallInvocationType {
    FUNCTION_CALL_INVOCATION_TYPE_UNSPECIFIED = 0,
    FUNCTION_CALL_INVOCATION_TYPE_SYNC_LEGACY = 1,
    FUNCTION_CALL_INVOCATION_TYPE_ASYNC_LEGACY = 2,
    FUNCTION_CALL_INVOCATION_TYPE_ASYNC = 3,
    FUNCTION_CALL_INVOCATION_TYPE_SYNC = 4,
    UNRECOGNIZED = -1
}
declare enum FunctionCallType {
    FUNCTION_CALL_TYPE_UNSPECIFIED = 0,
    FUNCTION_CALL_TYPE_UNARY = 1,
    FUNCTION_CALL_TYPE_MAP = 2,
    UNRECOGNIZED = -1
}
declare enum GPUType {
    /**
     * GPU_TYPE_UNSPECIFIED - Note: this enum is no longer used by current clients - don't add new types
     * Old clients still send it, so we use it server-side for compatibility
     */
    GPU_TYPE_UNSPECIFIED = 0,
    GPU_TYPE_T4 = 1,
    GPU_TYPE_A100 = 2,
    GPU_TYPE_A10G = 3,
    GPU_TYPE_ANY = 4,
    GPU_TYPE_A100_80GB = 8,
    GPU_TYPE_L4 = 9,
    GPU_TYPE_H100 = 10,
    GPU_TYPE_L40S = 11,
    GPU_TYPE_H200 = 12,
    UNRECOGNIZED = -1
}
declare enum ObjectCreationType {
    /** OBJECT_CREATION_TYPE_UNSPECIFIED - just lookup */
    OBJECT_CREATION_TYPE_UNSPECIFIED = 0,
    OBJECT_CREATION_TYPE_CREATE_IF_MISSING = 1,
    OBJECT_CREATION_TYPE_CREATE_FAIL_IF_EXISTS = 2,
    OBJECT_CREATION_TYPE_CREATE_OVERWRITE_IF_EXISTS = 3,
    /** OBJECT_CREATION_TYPE_ANONYMOUS_OWNED_BY_APP - deprecate at some point */
    OBJECT_CREATION_TYPE_ANONYMOUS_OWNED_BY_APP = 4,
    OBJECT_CREATION_TYPE_EPHEMERAL = 5,
    UNRECOGNIZED = -1
}
declare enum ParameterType {
    PARAM_TYPE_UNSPECIFIED = 0,
    PARAM_TYPE_STRING = 1,
    PARAM_TYPE_INT = 2,
    /** PARAM_TYPE_PICKLE - currently unused */
    PARAM_TYPE_PICKLE = 3,
    PARAM_TYPE_BYTES = 4,
    /** PARAM_TYPE_UNKNOWN - used in schemas to signify unrecognized or un-annotated types */
    PARAM_TYPE_UNKNOWN = 5,
    PARAM_TYPE_LIST = 6,
    PARAM_TYPE_DICT = 7,
    PARAM_TYPE_NONE = 8,
    PARAM_TYPE_BOOL = 9,
    UNRECOGNIZED = -1
}
declare enum ProgressType {
    /** IMAGE_SNAPSHOT_UPLOAD - TODO(erikbern): shouldn't be zero, and needs prefix */
    IMAGE_SNAPSHOT_UPLOAD = 0,
    /** FUNCTION_QUEUED - TODO(erikbern): needs_prefix */
    FUNCTION_QUEUED = 1,
    UNRECOGNIZED = -1
}
declare enum ProxyIpStatus {
    PROXY_IP_STATUS_UNSPECIFIED = 0,
    PROXY_IP_STATUS_CREATING = 1,
    PROXY_IP_STATUS_ONLINE = 2,
    PROXY_IP_STATUS_TERMINATED = 3,
    PROXY_IP_STATUS_UNHEALTHY = 4,
    UNRECOGNIZED = -1
}
declare enum RateLimitInterval {
    RATE_LIMIT_INTERVAL_UNSPECIFIED = 0,
    RATE_LIMIT_INTERVAL_SECOND = 1,
    RATE_LIMIT_INTERVAL_MINUTE = 2,
    UNRECOGNIZED = -1
}
declare enum RegistryAuthType {
    /** REGISTRY_AUTH_TYPE_UNSPECIFIED - Older clients send this instead of "public". */
    REGISTRY_AUTH_TYPE_UNSPECIFIED = 0,
    REGISTRY_AUTH_TYPE_AWS = 1,
    REGISTRY_AUTH_TYPE_GCP = 2,
    REGISTRY_AUTH_TYPE_PUBLIC = 3,
    REGISTRY_AUTH_TYPE_STATIC_CREDS = 4,
    UNRECOGNIZED = -1
}
declare enum SeekWhence {
    SEEK_SET = 0,
    SEEK_CUR = 1,
    SEEK_END = 2,
    UNRECOGNIZED = -1
}
declare enum SystemErrorCode {
    SYSTEM_ERROR_CODE_UNSPECIFIED = 0,
    /** SYSTEM_ERROR_CODE_PERM - EPERM: Operation not permitted */
    SYSTEM_ERROR_CODE_PERM = 1,
    /** SYSTEM_ERROR_CODE_NOENT - ENOENT: No such file or directory */
    SYSTEM_ERROR_CODE_NOENT = 2,
    /** SYSTEM_ERROR_CODE_IO - EIO: Input/output error */
    SYSTEM_ERROR_CODE_IO = 5,
    /** SYSTEM_ERROR_CODE_NXIO - ENXIO: No such device or address */
    SYSTEM_ERROR_CODE_NXIO = 6,
    /** SYSTEM_ERROR_CODE_NOMEM - ENOMEM: Out of memory */
    SYSTEM_ERROR_CODE_NOMEM = 12,
    /** SYSTEM_ERROR_CODE_ACCES - EACCES: Permission denied */
    SYSTEM_ERROR_CODE_ACCES = 13,
    /** SYSTEM_ERROR_CODE_EXIST - EEXIST: File exists */
    SYSTEM_ERROR_CODE_EXIST = 17,
    /** SYSTEM_ERROR_CODE_NOTDIR - ENOTDIR: Not a directory */
    SYSTEM_ERROR_CODE_NOTDIR = 20,
    /** SYSTEM_ERROR_CODE_ISDIR - EISDIR: Is a directory */
    SYSTEM_ERROR_CODE_ISDIR = 21,
    /** SYSTEM_ERROR_CODE_INVAL - EINVAL: Invalid argument */
    SYSTEM_ERROR_CODE_INVAL = 22,
    /** SYSTEM_ERROR_CODE_MFILE - EMFILE: Too many open files */
    SYSTEM_ERROR_CODE_MFILE = 24,
    /** SYSTEM_ERROR_CODE_FBIG - EFBIG: File too large */
    SYSTEM_ERROR_CODE_FBIG = 27,
    /** SYSTEM_ERROR_CODE_NOSPC - ENOSPC: No space left on device */
    SYSTEM_ERROR_CODE_NOSPC = 28,
    UNRECOGNIZED = -1
}
declare enum TaskSnapshotBehavior {
    TASK_SNAPSHOT_BEHAVIOR_UNSPECIFIED = 0,
    TASK_SNAPSHOT_BEHAVIOR_SNAPSHOT = 1,
    TASK_SNAPSHOT_BEHAVIOR_RESTORE = 2,
    TASK_SNAPSHOT_BEHAVIOR_NONE = 3,
    UNRECOGNIZED = -1
}
declare enum TaskState {
    TASK_STATE_UNSPECIFIED = 0,
    TASK_STATE_CREATED = 6,
    TASK_STATE_QUEUED = 1,
    TASK_STATE_WORKER_ASSIGNED = 2,
    TASK_STATE_LOADING_IMAGE = 3,
    TASK_STATE_ACTIVE = 4,
    TASK_STATE_COMPLETED = 5,
    TASK_STATE_CREATING_CONTAINER = 7,
    TASK_STATE_IDLE = 8,
    TASK_STATE_PREEMPTIBLE = 9,
    TASK_STATE_PREEMPTED = 10,
    TASK_STATE_LOADING_CHECKPOINT_IMAGE = 11,
    UNRECOGNIZED = -1
}
declare enum TunnelType {
    TUNNEL_TYPE_UNSPECIFIED = 0,
    /** TUNNEL_TYPE_H2 - HTTP/2 tunnel */
    TUNNEL_TYPE_H2 = 1,
    UNRECOGNIZED = -1
}
declare enum VolumeFsVersion {
    VOLUME_FS_VERSION_UNSPECIFIED = 0,
    VOLUME_FS_VERSION_V1 = 1,
    VOLUME_FS_VERSION_V2 = 2,
    UNRECOGNIZED = -1
}
declare enum WebhookAsyncMode {
    WEBHOOK_ASYNC_MODE_UNSPECIFIED = 0,
    /** WEBHOOK_ASYNC_MODE_DISABLED - No longer used by client */
    WEBHOOK_ASYNC_MODE_DISABLED = 2,
    /** WEBHOOK_ASYNC_MODE_TRIGGER - No longer used by client (previously used when wait_for_response=False) */
    WEBHOOK_ASYNC_MODE_TRIGGER = 3,
    /** WEBHOOK_ASYNC_MODE_AUTO - The default */
    WEBHOOK_ASYNC_MODE_AUTO = 4,
    UNRECOGNIZED = -1
}
declare enum WebhookType {
    WEBHOOK_TYPE_UNSPECIFIED = 0,
    WEBHOOK_TYPE_ASGI_APP = 1,
    WEBHOOK_TYPE_FUNCTION = 2,
    WEBHOOK_TYPE_WSGI_APP = 3,
    WEBHOOK_TYPE_WEB_SERVER = 4,
    UNRECOGNIZED = -1
}
declare enum ClassParameterInfo_ParameterSerializationFormat {
    PARAM_SERIALIZATION_FORMAT_UNSPECIFIED = 0,
    /** PARAM_SERIALIZATION_FORMAT_PICKLE - legacy format - pickle of (args, kwargs) tuple */
    PARAM_SERIALIZATION_FORMAT_PICKLE = 1,
    /** PARAM_SERIALIZATION_FORMAT_PROTO - new format using api.FunctionParameterSet */
    PARAM_SERIALIZATION_FORMAT_PROTO = 2,
    UNRECOGNIZED = -1
}
declare enum CloudBucketMount_BucketType {
    UNSPECIFIED = 0,
    S3 = 1,
    R2 = 2,
    GCP = 3,
    UNRECOGNIZED = -1
}
declare enum FileEntry_FileType {
    UNSPECIFIED = 0,
    FILE = 1,
    DIRECTORY = 2,
    SYMLINK = 3,
    FIFO = 4,
    SOCKET = 5,
    UNRECOGNIZED = -1
}
declare enum Function_DefinitionType {
    DEFINITION_TYPE_UNSPECIFIED = 0,
    DEFINITION_TYPE_SERIALIZED = 1,
    DEFINITION_TYPE_FILE = 2,
    UNRECOGNIZED = -1
}
declare enum Function_FunctionType {
    FUNCTION_TYPE_UNSPECIFIED = 0,
    FUNCTION_TYPE_GENERATOR = 1,
    FUNCTION_TYPE_FUNCTION = 2,
    UNRECOGNIZED = -1
}
declare enum FunctionSchema_FunctionSchemaType {
    FUNCTION_SCHEMA_UNSPECIFIED = 0,
    FUNCTION_SCHEMA_V1 = 1,
    UNRECOGNIZED = -1
}
declare enum GenericResult_GenericStatus {
    GENERIC_STATUS_UNSPECIFIED = 0,
    GENERIC_STATUS_SUCCESS = 1,
    GENERIC_STATUS_FAILURE = 2,
    /** GENERIC_STATUS_TERMINATED - Used when a task was killed using an external signal. */
    GENERIC_STATUS_TERMINATED = 3,
    GENERIC_STATUS_TIMEOUT = 4,
    /**
     * GENERIC_STATUS_INIT_FAILURE - Used when the user's function fails to initialize (ex. S3 mount failed due to invalid credentials).
     * Terminates the function and all remaining inputs.
     */
    GENERIC_STATUS_INIT_FAILURE = 5,
    GENERIC_STATUS_INTERNAL_FAILURE = 6,
    /** GENERIC_STATUS_IDLE_TIMEOUT - Used when sandboxes are terminated due to idle_timeout */
    GENERIC_STATUS_IDLE_TIMEOUT = 7,
    UNRECOGNIZED = -1
}
declare enum NetworkAccess_NetworkAccessType {
    UNSPECIFIED = 0,
    OPEN = 1,
    BLOCKED = 2,
    ALLOWLIST = 3,
    UNRECOGNIZED = -1
}
declare enum PTYInfo_PTYType {
    /** PTY_TYPE_UNSPECIFIED - Nothing */
    PTY_TYPE_UNSPECIFIED = 0,
    /** PTY_TYPE_FUNCTION - Run function in PTY */
    PTY_TYPE_FUNCTION = 1,
    /** PTY_TYPE_SHELL - Replace function with shell */
    PTY_TYPE_SHELL = 2,
    UNRECOGNIZED = -1
}
declare enum SandboxRestoreRequest_SandboxNameOverrideType {
    SANDBOX_NAME_OVERRIDE_TYPE_UNSPECIFIED = 0,
    SANDBOX_NAME_OVERRIDE_TYPE_NONE = 1,
    SANDBOX_NAME_OVERRIDE_TYPE_STRING = 2,
    UNRECOGNIZED = -1
}
declare enum Warning_WarningType {
    WARNING_TYPE_UNSPECIFIED = 0,
    WARNING_TYPE_CLIENT_DEPRECATION = 1,
    WARNING_TYPE_RESOURCE_LIMIT = 2,
    WARNING_TYPE_FUNCTION_CONFIGURATION = 3,
    UNRECOGNIZED = -1
}
interface AppClientDisconnectRequest {
    appId: string;
    reason: AppDisconnectReason;
    exception: string;
}
declare const AppClientDisconnectRequest: MessageFns<AppClientDisconnectRequest>;
interface AppCreateRequest {
    clientId: string;
    /** Human readable label for the app */
    description: string;
    environmentName: string;
    appState: AppState;
}
declare const AppCreateRequest: MessageFns<AppCreateRequest>;
interface AppCreateResponse {
    appId: string;
    appPageUrl: string;
    appLogsUrl: string;
}
declare const AppCreateResponse: MessageFns<AppCreateResponse>;
interface AppDeployRequest {
    appId: string;
    name: string;
    objectEntity: string;
    visibility: AppDeployVisibility;
    tag: string;
}
declare const AppDeployRequest: MessageFns<AppDeployRequest>;
interface AppDeployResponse {
    url: string;
}
declare const AppDeployResponse: MessageFns<AppDeployResponse>;
interface AppDeploymentHistory {
    appId: string;
    version: number;
    clientVersion: string;
    deployedAt: number;
    deployedBy: string;
    deployedByAvatarUrl: string;
    tag: string;
    rollbackVersion: number;
    rollbackAllowed: boolean;
    commitInfo?: CommitInfo | undefined;
}
declare const AppDeploymentHistory: MessageFns<AppDeploymentHistory>;
interface AppDeploymentHistoryRequest {
    appId: string;
}
declare const AppDeploymentHistoryRequest: MessageFns<AppDeploymentHistoryRequest>;
interface AppDeploymentHistoryResponse {
    appDeploymentHistories: AppDeploymentHistory[];
}
declare const AppDeploymentHistoryResponse: MessageFns<AppDeploymentHistoryResponse>;
interface AppGetByDeploymentNameRequest {
    name: string;
    environmentName: string;
}
declare const AppGetByDeploymentNameRequest: MessageFns<AppGetByDeploymentNameRequest>;
interface AppGetByDeploymentNameResponse {
    appId: string;
}
declare const AppGetByDeploymentNameResponse: MessageFns<AppGetByDeploymentNameResponse>;
interface AppGetLayoutRequest {
    appId: string;
}
declare const AppGetLayoutRequest: MessageFns<AppGetLayoutRequest>;
interface AppGetLayoutResponse {
    appLayout: AppLayout | undefined;
}
declare const AppGetLayoutResponse: MessageFns<AppGetLayoutResponse>;
interface AppGetLogsRequest {
    appId: string;
    timeout: number;
    lastEntryId: string;
    functionId: string;
    inputId: string;
    taskId: string;
    functionCallId: string;
    fileDescriptor: FileDescriptor;
    sandboxId: string;
}
declare const AppGetLogsRequest: MessageFns<AppGetLogsRequest>;
interface AppGetObjectsItem {
    tag: string;
    object: Object_ | undefined;
}
declare const AppGetObjectsItem: MessageFns<AppGetObjectsItem>;
interface AppGetObjectsRequest {
    appId: string;
    includeUnindexed: boolean;
    /** True starting with 0.67.x clients, which don't create method placeholder functions */
    onlyClassFunction: boolean;
}
declare const AppGetObjectsRequest: MessageFns<AppGetObjectsRequest>;
interface AppGetObjectsResponse {
    items: AppGetObjectsItem[];
}
declare const AppGetObjectsResponse: MessageFns<AppGetObjectsResponse>;
interface AppGetOrCreateRequest {
    appName: string;
    environmentName: string;
    objectCreationType: ObjectCreationType;
}
declare const AppGetOrCreateRequest: MessageFns<AppGetOrCreateRequest>;
interface AppGetOrCreateResponse {
    appId: string;
}
declare const AppGetOrCreateResponse: MessageFns<AppGetOrCreateResponse>;
interface AppGetTagsRequest {
    appId: string;
}
declare const AppGetTagsRequest: MessageFns<AppGetTagsRequest>;
interface AppGetTagsResponse {
    tags: {
        [key: string]: string;
    };
}
declare const AppGetTagsResponse: MessageFns<AppGetTagsResponse>;
interface AppHeartbeatRequest {
    appId: string;
}
declare const AppHeartbeatRequest: MessageFns<AppHeartbeatRequest>;
interface AppLayout {
    objects: Object_[];
    /** tag -> function id */
    functionIds: {
        [key: string]: string;
    };
    /** tag -> class id */
    classIds: {
        [key: string]: string;
    };
}
declare const AppLayout: MessageFns<AppLayout>;
interface AppListRequest {
    environmentName: string;
}
declare const AppListRequest: MessageFns<AppListRequest>;
interface AppListResponse {
    apps: AppListResponse_AppListItem[];
}
declare const AppListResponse: MessageFns<AppListResponse>;
interface AppListResponse_AppListItem {
    appId: string;
    description: string;
    state: AppState;
    createdAt: number;
    stoppedAt: number;
    nRunningTasks: number;
    name: string;
}
declare const AppListResponse_AppListItem: MessageFns<AppListResponse_AppListItem>;
interface AppLookupRequest {
    appName: string;
    environmentName: string;
}
declare const AppLookupRequest: MessageFns<AppLookupRequest>;
interface AppLookupResponse {
    appId: string;
}
declare const AppLookupResponse: MessageFns<AppLookupResponse>;
interface AppPublishRequest {
    appId: string;
    name: string;
    /** Additional metadata to identify a deployment */
    deploymentTag: string;
    /** Published app will be in this state */
    appState: AppState;
    /** function_name -> function_id */
    functionIds: {
        [key: string]: string;
    };
    /** class_name -> class_id */
    classIds: {
        [key: string]: string;
    };
    /** function_id -> definition_id */
    definitionIds: {
        [key: string]: string;
    };
    /** Unused by client, but used internally */
    rollbackVersion: number;
    /** Unused by client, but used internally */
    clientVersion: string;
    /** Git information for deployment tracking */
    commitInfo: CommitInfo | undefined;
    /** Additional metadata to attach to the App */
    tags: {
        [key: string]: string;
    };
}
declare const AppPublishRequest: MessageFns<AppPublishRequest>;
interface AppPublishResponse {
    url: string;
    serverWarnings: Warning[];
}
declare const AppPublishResponse: MessageFns<AppPublishResponse>;
interface AppRollbackRequest {
    appId: string;
    /** signed as we support negative "roll back n versions" requests */
    version: number;
}
declare const AppRollbackRequest: MessageFns<AppRollbackRequest>;
interface AppSetObjectsRequest {
    appId: string;
    indexedObjectIds: {
        [key: string]: string;
    };
    clientId: string;
    unindexedObjectIds: string[];
    /** promotes an app from initializing to this new state */
    newAppState: AppState;
}
declare const AppSetObjectsRequest: MessageFns<AppSetObjectsRequest>;
interface AppSetTagsRequest {
    appId: string;
    tags: {
        [key: string]: string;
    };
}
declare const AppSetTagsRequest: MessageFns<AppSetTagsRequest>;
interface AppStopRequest {
    appId: string;
    source: AppStopSource;
}
declare const AppStopRequest: MessageFns<AppStopRequest>;
interface AttemptAwaitRequest {
    attemptToken: string;
    /** Used for waypoints. */
    requestedAt: number;
    timeoutSecs: number;
}
declare const AttemptAwaitRequest: MessageFns<AttemptAwaitRequest>;
interface AttemptAwaitResponse {
    output?: FunctionGetOutputsItem | undefined;
}
declare const AttemptAwaitResponse: MessageFns<AttemptAwaitResponse>;
interface AttemptRetryRequest {
    functionId: string;
    parentInputId: string;
    input: FunctionPutInputsItem | undefined;
    attemptToken: string;
}
declare const AttemptRetryRequest: MessageFns<AttemptRetryRequest>;
interface AttemptRetryResponse {
    attemptToken: string;
}
declare const AttemptRetryResponse: MessageFns<AttemptRetryResponse>;
interface AttemptStartRequest {
    functionId: string;
    parentInputId: string;
    input: FunctionPutInputsItem | undefined;
}
declare const AttemptStartRequest: MessageFns<AttemptStartRequest>;
interface AttemptStartResponse {
    attemptToken: string;
    retryPolicy: FunctionRetryPolicy | undefined;
}
declare const AttemptStartResponse: MessageFns<AttemptStartResponse>;
interface AuthTokenGetRequest {
}
declare const AuthTokenGetRequest: MessageFns<AuthTokenGetRequest>;
interface AuthTokenGetResponse {
    token: string;
}
declare const AuthTokenGetResponse: MessageFns<AuthTokenGetResponse>;
/**
 * A collection of user-configurable settings for Function autoscaling
 * These are used for static configuration and for dynamic autoscaler updates
 */
interface AutoscalerSettings {
    /** Minimum containers when scale-to-zero is not desired; pka "keep_warm" or "warm_pool_size" */
    minContainers?: number | undefined;
    /** Limit on the number of containers that can be running for each Function; pka "concurrency_limit" */
    maxContainers?: number | undefined;
    /** Additional container to spin up when Function is active */
    bufferContainers?: number | undefined;
    /** Currently unused; a placeholder in case we decide to expose scaleup control to users */
    scaleupWindow?: number | undefined;
    /** Maximum amount of time a container can be idle before being scaled down, in seconds; pka "container_idle_timeout" */
    scaledownWindow?: number | undefined;
}
declare const AutoscalerSettings: MessageFns<AutoscalerSettings>;
/** Used for flash autoscaling */
interface AutoscalingMetrics {
    cpuUsagePercent: number;
    memoryUsagePercent: number;
    concurrentRequests: number;
    timestamp: number;
}
declare const AutoscalingMetrics: MessageFns<AutoscalingMetrics>;
interface BaseImage {
    imageId: string;
    dockerTag: string;
}
declare const BaseImage: MessageFns<BaseImage>;
interface BlobCreateRequest {
    /**
     * TODO(erikbern): how are these garbage collected?
     * Shouldn't they belong to an app?
     */
    contentMd5: string;
    contentSha256Base64: string;
    contentLength: number;
}
declare const BlobCreateRequest: MessageFns<BlobCreateRequest>;
interface BlobCreateResponse {
    blobId: string;
    uploadUrl?: string | undefined;
    multipart?: MultiPartUpload | undefined;
    blobIds: string[];
    uploadUrls?: UploadUrlList | undefined;
    multiparts?: MultiPartUploadList | undefined;
}
declare const BlobCreateResponse: MessageFns<BlobCreateResponse>;
interface BlobGetRequest {
    blobId: string;
}
declare const BlobGetRequest: MessageFns<BlobGetRequest>;
interface BlobGetResponse {
    downloadUrl: string;
}
declare const BlobGetResponse: MessageFns<BlobGetResponse>;
interface BuildFunction {
    definition: string;
    globals: Uint8Array;
    input: FunctionInput | undefined;
}
declare const BuildFunction: MessageFns<BuildFunction>;
interface CancelInputEvent {
    inputIds: string[];
    terminateContainers: boolean;
}
declare const CancelInputEvent: MessageFns<CancelInputEvent>;
interface CheckpointInfo {
    checksum: string;
    status: CheckpointStatus;
    checkpointId: string;
    runtimeFingerprint: string;
    size: number;
    checksumIsFileIndex: boolean;
    originalTaskId: string;
    runscRuntimeVersion: string;
}
declare const CheckpointInfo: MessageFns<CheckpointInfo>;
interface ClassCreateRequest {
    appId: string;
    existingClassId: string;
    methods: ClassMethod[];
    /** True starting with 0.67.x clients, which don't create method placeholder functions */
    onlyClassFunction: boolean;
}
declare const ClassCreateRequest: MessageFns<ClassCreateRequest>;
interface ClassCreateResponse {
    classId: string;
    handleMetadata: ClassHandleMetadata | undefined;
}
declare const ClassCreateResponse: MessageFns<ClassCreateResponse>;
interface ClassGetRequest {
    appName: string;
    objectTag: string;
    environmentName: string;
    /** True starting with 0.67.x clients, which don't create method placeholder functions */
    onlyClassFunction: boolean;
}
declare const ClassGetRequest: MessageFns<ClassGetRequest>;
interface ClassGetResponse {
    classId: string;
    handleMetadata: ClassHandleMetadata | undefined;
    serverWarnings: Warning[];
}
declare const ClassGetResponse: MessageFns<ClassGetResponse>;
interface ClassHandleMetadata {
    methods: ClassMethod[];
    classFunctionId: string;
    classFunctionMetadata: FunctionHandleMetadata | undefined;
}
declare const ClassHandleMetadata: MessageFns<ClassHandleMetadata>;
interface ClassMethod {
    functionName: string;
    functionId: string;
    /** Class methods need to hydrate all functions on the class */
    functionHandleMetadata: FunctionHandleMetadata | undefined;
}
declare const ClassMethod: MessageFns<ClassMethod>;
interface ClassParameterInfo {
    format: ClassParameterInfo_ParameterSerializationFormat;
    /** only set for PARAM_SERIALIZATION_FORMAT_PROTO */
    schema: ClassParameterSpec[];
}
declare const ClassParameterInfo: MessageFns<ClassParameterInfo>;
/** TODO: rename into NamedPayloadType or similar */
interface ClassParameterSpec {
    name: string;
    /** TODO: deprecate - use full_type instead */
    type: ParameterType;
    hasDefault: boolean;
    /** Default *values* are only registered for class parameters */
    stringDefault?: string | undefined;
    intDefault?: number | undefined;
    pickleDefault?: Uint8Array | undefined;
    bytesDefault?: Uint8Array | undefined;
    boolDefault?: boolean | undefined;
    /** supersedes `type` */
    fullType: GenericPayloadType | undefined;
}
declare const ClassParameterSpec: MessageFns<ClassParameterSpec>;
interface ClientHelloResponse {
    warning: string;
    /** Deprecated, no longer used in client */
    imageBuilderVersion: string;
    serverWarnings: Warning[];
}
declare const ClientHelloResponse: MessageFns<ClientHelloResponse>;
interface CloudBucketMount$1 {
    bucketName: string;
    mountPath: string;
    credentialsSecretId: string;
    readOnly: boolean;
    bucketType: CloudBucketMount_BucketType;
    requesterPays: boolean;
    bucketEndpointUrl?: string | undefined;
    keyPrefix?: string | undefined;
    oidcAuthRoleArn?: string | undefined;
}
declare const CloudBucketMount$1: MessageFns<CloudBucketMount$1>;
interface ClusterGetRequest {
    clusterId: string;
}
declare const ClusterGetRequest: MessageFns<ClusterGetRequest>;
interface ClusterGetResponse {
    cluster: ClusterStats | undefined;
}
declare const ClusterGetResponse: MessageFns<ClusterGetResponse>;
interface ClusterListRequest {
    environmentName: string;
}
declare const ClusterListRequest: MessageFns<ClusterListRequest>;
interface ClusterListResponse {
    clusters: ClusterStats[];
}
declare const ClusterListResponse: MessageFns<ClusterListResponse>;
interface ClusterStats {
    appId: string;
    taskIds: string[];
    clusterId: string;
    /** Defined as start time of the first task in the cluster */
    startedAt: number;
}
declare const ClusterStats: MessageFns<ClusterStats>;
interface CommitInfo {
    /** Only git is supported for now */
    vcs: string;
    branch: string;
    commitHash: string;
    commitTimestamp: number;
    dirty: boolean;
    authorName: string;
    authorEmail: string;
    repoUrl: string;
}
declare const CommitInfo: MessageFns<CommitInfo>;
interface ContainerCheckpointRequest {
    checkpointId: string;
}
declare const ContainerCheckpointRequest: MessageFns<ContainerCheckpointRequest>;
interface ContainerExecGetOutputRequest {
    execId: string;
    timeout: number;
    lastBatchIndex: number;
    fileDescriptor: FileDescriptor;
    /** Old clients (up to 0.65.39) expect string output. Newer clients stream raw bytes */
    getRawBytes: boolean;
}
declare const ContainerExecGetOutputRequest: MessageFns<ContainerExecGetOutputRequest>;
interface ContainerExecPutInputRequest {
    execId: string;
    input: RuntimeInputMessage | undefined;
}
declare const ContainerExecPutInputRequest: MessageFns<ContainerExecPutInputRequest>;
interface ContainerExecRequest {
    taskId: string;
    command: string[];
    /**
     * If pty_info is provided, open a PTY, but also this container exec is treated an
     * "interactive shell" request, and it will be terminated if messages are not periodically
     * sent on the stdin stream on some interval (currently 40 seconds).
     */
    ptyInfo?: PTYInfo | undefined;
    /**
     * Send SIGTERM to running container on exit of exec command.
     *
     * @deprecated
     */
    terminateContainerOnExit: boolean;
    /** For internal debugging use only. */
    runtimeDebug: boolean;
    stdoutOutput: ExecOutputOption;
    stderrOutput: ExecOutputOption;
    timeoutSecs: number;
    workdir?: string | undefined;
    secretIds: string[];
}
declare const ContainerExecRequest: MessageFns<ContainerExecRequest>;
interface ContainerExecResponse {
    execId: string;
}
declare const ContainerExecResponse: MessageFns<ContainerExecResponse>;
interface ContainerExecWaitRequest {
    execId: string;
    timeout: number;
}
declare const ContainerExecWaitRequest: MessageFns<ContainerExecWaitRequest>;
interface ContainerExecWaitResponse {
    exitCode?: number | undefined;
    completed: boolean;
}
declare const ContainerExecWaitResponse: MessageFns<ContainerExecWaitResponse>;
interface ContainerFileCloseRequest {
    fileDescriptor: string;
}
declare const ContainerFileCloseRequest: MessageFns<ContainerFileCloseRequest>;
interface ContainerFileDeleteBytesRequest {
    fileDescriptor: string;
    startInclusive?: number | undefined;
    endExclusive?: number | undefined;
}
declare const ContainerFileDeleteBytesRequest: MessageFns<ContainerFileDeleteBytesRequest>;
interface ContainerFileFlushRequest {
    fileDescriptor: string;
}
declare const ContainerFileFlushRequest: MessageFns<ContainerFileFlushRequest>;
interface ContainerFileLsRequest {
    path: string;
}
declare const ContainerFileLsRequest: MessageFns<ContainerFileLsRequest>;
interface ContainerFileMkdirRequest {
    path: string;
    makeParents: boolean;
}
declare const ContainerFileMkdirRequest: MessageFns<ContainerFileMkdirRequest>;
interface ContainerFileOpenRequest {
    /** file descriptor is hydrated when sent from server -> worker */
    fileDescriptor?: string | undefined;
    path: string;
    mode: string;
}
declare const ContainerFileOpenRequest: MessageFns<ContainerFileOpenRequest>;
interface ContainerFileReadLineRequest {
    fileDescriptor: string;
}
declare const ContainerFileReadLineRequest: MessageFns<ContainerFileReadLineRequest>;
interface ContainerFileReadRequest {
    fileDescriptor: string;
    n?: number | undefined;
}
declare const ContainerFileReadRequest: MessageFns<ContainerFileReadRequest>;
interface ContainerFileRmRequest {
    path: string;
    recursive: boolean;
}
declare const ContainerFileRmRequest: MessageFns<ContainerFileRmRequest>;
interface ContainerFileSeekRequest {
    fileDescriptor: string;
    offset: number;
    whence: SeekWhence;
}
declare const ContainerFileSeekRequest: MessageFns<ContainerFileSeekRequest>;
interface ContainerFileWatchRequest {
    path: string;
    recursive: boolean;
    timeoutSecs?: number | undefined;
}
declare const ContainerFileWatchRequest: MessageFns<ContainerFileWatchRequest>;
interface ContainerFileWriteReplaceBytesRequest {
    fileDescriptor: string;
    data: Uint8Array;
    startInclusive?: number | undefined;
    endExclusive?: number | undefined;
}
declare const ContainerFileWriteReplaceBytesRequest: MessageFns<ContainerFileWriteReplaceBytesRequest>;
interface ContainerFileWriteRequest {
    fileDescriptor: string;
    data: Uint8Array;
}
declare const ContainerFileWriteRequest: MessageFns<ContainerFileWriteRequest>;
interface ContainerFilesystemExecGetOutputRequest {
    execId: string;
    timeout: number;
}
declare const ContainerFilesystemExecGetOutputRequest: MessageFns<ContainerFilesystemExecGetOutputRequest>;
interface ContainerFilesystemExecRequest {
    fileOpenRequest?: ContainerFileOpenRequest | undefined;
    fileWriteRequest?: ContainerFileWriteRequest | undefined;
    fileReadRequest?: ContainerFileReadRequest | undefined;
    fileFlushRequest?: ContainerFileFlushRequest | undefined;
    fileReadLineRequest?: ContainerFileReadLineRequest | undefined;
    fileSeekRequest?: ContainerFileSeekRequest | undefined;
    fileDeleteBytesRequest?: ContainerFileDeleteBytesRequest | undefined;
    fileWriteReplaceBytesRequest?: ContainerFileWriteReplaceBytesRequest | undefined;
    fileCloseRequest?: ContainerFileCloseRequest | undefined;
    fileLsRequest?: ContainerFileLsRequest | undefined;
    fileMkdirRequest?: ContainerFileMkdirRequest | undefined;
    fileRmRequest?: ContainerFileRmRequest | undefined;
    fileWatchRequest?: ContainerFileWatchRequest | undefined;
    taskId: string;
}
declare const ContainerFilesystemExecRequest: MessageFns<ContainerFilesystemExecRequest>;
interface ContainerFilesystemExecResponse {
    execId: string;
    /** only set when the request opens a new file, i.e., ContainerFileOpenRequest */
    fileDescriptor?: string | undefined;
}
declare const ContainerFilesystemExecResponse: MessageFns<ContainerFilesystemExecResponse>;
interface ContainerHeartbeatRequest {
    /** Bad client version. */
    canceledInputsReturnOutputs: boolean;
    canceledInputsReturnOutputsV2: boolean;
}
declare const ContainerHeartbeatRequest: MessageFns<ContainerHeartbeatRequest>;
interface ContainerHeartbeatResponse {
    cancelInputEvent?: CancelInputEvent | undefined;
}
declare const ContainerHeartbeatResponse: MessageFns<ContainerHeartbeatResponse>;
interface ContainerLogRequest {
    logs: TaskLogs[];
}
declare const ContainerLogRequest: MessageFns<ContainerLogRequest>;
interface ContainerReloadVolumesRequest {
    taskId: string;
}
declare const ContainerReloadVolumesRequest: MessageFns<ContainerReloadVolumesRequest>;
interface ContainerReloadVolumesResponse {
}
declare const ContainerReloadVolumesResponse: MessageFns<ContainerReloadVolumesResponse>;
interface ContainerStopRequest {
    taskId: string;
}
declare const ContainerStopRequest: MessageFns<ContainerStopRequest>;
interface ContainerStopResponse {
}
declare const ContainerStopResponse: MessageFns<ContainerStopResponse>;
interface CreationInfo {
    /** This message is used in metadata for resource objects like Dict, Queue, Volume, etc. */
    createdAt: number;
    /** User name or service name */
    createdBy: string;
}
declare const CreationInfo: MessageFns<CreationInfo>;
interface CustomDomainConfig {
    name: string;
}
declare const CustomDomainConfig: MessageFns<CustomDomainConfig>;
interface CustomDomainInfo {
    url: string;
}
declare const CustomDomainInfo: MessageFns<CustomDomainInfo>;
interface DNSRecord {
    type: DNSRecordType;
    name: string;
    value: string;
}
declare const DNSRecord: MessageFns<DNSRecord>;
/** Chunks of data that can be streamed in and out of tasks. */
interface DataChunk {
    dataFormat: DataFormat;
    data?: Uint8Array | undefined;
    dataBlobId?: string | undefined;
    /** Index of this data chunk in the stream. */
    index: number;
}
declare const DataChunk: MessageFns<DataChunk>;
interface DictClearRequest {
    dictId: string;
}
declare const DictClearRequest: MessageFns<DictClearRequest>;
interface DictContainsRequest {
    dictId: string;
    key: Uint8Array;
}
declare const DictContainsRequest: MessageFns<DictContainsRequest>;
interface DictContainsResponse {
    found: boolean;
}
declare const DictContainsResponse: MessageFns<DictContainsResponse>;
interface DictContentsRequest {
    dictId: string;
    /**
     * Setting these to True will populate the corresponding field in the response, otherwise it will be null
     * This lets us support the keys/values/items SDK API through one RPC without unnecessary data transfer
     */
    keys: boolean;
    values: boolean;
}
declare const DictContentsRequest: MessageFns<DictContentsRequest>;
interface DictDeleteRequest {
    dictId: string;
}
declare const DictDeleteRequest: MessageFns<DictDeleteRequest>;
interface DictEntry {
    key: Uint8Array;
    value: Uint8Array;
}
declare const DictEntry: MessageFns<DictEntry>;
interface DictGetOrCreateRequest {
    deploymentName: string;
    environmentName: string;
    objectCreationType: ObjectCreationType;
    data: DictEntry[];
}
declare const DictGetOrCreateRequest: MessageFns<DictGetOrCreateRequest>;
interface DictGetOrCreateResponse {
    dictId: string;
    metadata: DictMetadata | undefined;
}
declare const DictGetOrCreateResponse: MessageFns<DictGetOrCreateResponse>;
interface DictGetRequest {
    dictId: string;
    key: Uint8Array;
}
declare const DictGetRequest: MessageFns<DictGetRequest>;
interface DictGetResponse {
    found: boolean;
    value?: Uint8Array | undefined;
}
declare const DictGetResponse: MessageFns<DictGetResponse>;
interface DictHeartbeatRequest {
    dictId: string;
}
declare const DictHeartbeatRequest: MessageFns<DictHeartbeatRequest>;
interface DictLenRequest {
    dictId: string;
}
declare const DictLenRequest: MessageFns<DictLenRequest>;
interface DictLenResponse {
    len: number;
}
declare const DictLenResponse: MessageFns<DictLenResponse>;
interface DictListRequest {
    environmentName: string;
    pagination: ListPagination | undefined;
}
declare const DictListRequest: MessageFns<DictListRequest>;
interface DictListResponse {
    dicts: DictListResponse_DictInfo[];
    environmentName: string;
}
declare const DictListResponse: MessageFns<DictListResponse>;
interface DictListResponse_DictInfo {
    name: string;
    /** Superseded by metadata, used by clients up to 1.1.2 */
    createdAt: number;
    dictId: string;
    metadata: DictMetadata | undefined;
}
declare const DictListResponse_DictInfo: MessageFns<DictListResponse_DictInfo>;
interface DictMetadata {
    name: string;
    creationInfo: CreationInfo | undefined;
}
declare const DictMetadata: MessageFns<DictMetadata>;
interface DictPopRequest {
    dictId: string;
    key: Uint8Array;
}
declare const DictPopRequest: MessageFns<DictPopRequest>;
interface DictPopResponse {
    found: boolean;
    value?: Uint8Array | undefined;
}
declare const DictPopResponse: MessageFns<DictPopResponse>;
interface DictUpdateRequest {
    dictId: string;
    updates: DictEntry[];
    ifNotExists: boolean;
}
declare const DictUpdateRequest: MessageFns<DictUpdateRequest>;
interface DictUpdateResponse {
    created: boolean;
}
declare const DictUpdateResponse: MessageFns<DictUpdateResponse>;
interface Domain {
    domainId: string;
    domainName: string;
    createdAt: number;
    certificateStatus: CertificateStatus;
    dnsRecords: DNSRecord[];
}
declare const Domain: MessageFns<Domain>;
interface DomainCertificateVerifyRequest {
    domainId: string;
}
declare const DomainCertificateVerifyRequest: MessageFns<DomainCertificateVerifyRequest>;
interface DomainCertificateVerifyResponse {
    domain: Domain | undefined;
}
declare const DomainCertificateVerifyResponse: MessageFns<DomainCertificateVerifyResponse>;
interface DomainCreateRequest {
    domainName: string;
}
declare const DomainCreateRequest: MessageFns<DomainCreateRequest>;
interface DomainCreateResponse {
    domainId: string;
    dnsRecords: DNSRecord[];
}
declare const DomainCreateResponse: MessageFns<DomainCreateResponse>;
interface DomainListRequest {
}
declare const DomainListRequest: MessageFns<DomainListRequest>;
interface DomainListResponse {
    domains: Domain[];
}
declare const DomainListResponse: MessageFns<DomainListResponse>;
interface EnvironmentCreateRequest {
    name: string;
}
declare const EnvironmentCreateRequest: MessageFns<EnvironmentCreateRequest>;
interface EnvironmentDeleteRequest {
    name: string;
}
declare const EnvironmentDeleteRequest: MessageFns<EnvironmentDeleteRequest>;
interface EnvironmentGetOrCreateRequest {
    deploymentName: string;
    objectCreationType: ObjectCreationType;
}
declare const EnvironmentGetOrCreateRequest: MessageFns<EnvironmentGetOrCreateRequest>;
interface EnvironmentGetOrCreateResponse {
    environmentId: string;
    metadata: EnvironmentMetadata | undefined;
}
declare const EnvironmentGetOrCreateResponse: MessageFns<EnvironmentGetOrCreateResponse>;
interface EnvironmentListItem {
    name: string;
    webhookSuffix: string;
    createdAt: number;
    default: boolean;
    isManaged: boolean;
    environmentId: string;
}
declare const EnvironmentListItem: MessageFns<EnvironmentListItem>;
interface EnvironmentListResponse {
    items: EnvironmentListItem[];
}
declare const EnvironmentListResponse: MessageFns<EnvironmentListResponse>;
interface EnvironmentMetadata {
    name: string;
    settings: EnvironmentSettings | undefined;
}
declare const EnvironmentMetadata: MessageFns<EnvironmentMetadata>;
/**
 * Environment-scoped settings, with workspace-level defaults.
 * Note that we use MergeFrom to combine workspace / environment settings,
 * which will *append* any `repeated` fields!
 */
interface EnvironmentSettings {
    imageBuilderVersion: string;
    webhookSuffix: string;
}
declare const EnvironmentSettings: MessageFns<EnvironmentSettings>;
interface EnvironmentUpdateRequest {
    currentName: string;
    name: string | undefined;
    webSuffix: string | undefined;
}
declare const EnvironmentUpdateRequest: MessageFns<EnvironmentUpdateRequest>;
/** A file entry when listing files in a volume or network file system. */
interface FileEntry {
    path: string;
    type: FileEntry_FileType;
    mtime: number;
    size: number;
}
declare const FileEntry: MessageFns<FileEntry>;
interface FilesystemRuntimeOutputBatch {
    output: Uint8Array[];
    error?: SystemErrorMessage | undefined;
    batchIndex: number;
    eof: boolean;
}
declare const FilesystemRuntimeOutputBatch: MessageFns<FilesystemRuntimeOutputBatch>;
interface FlashContainerDeregisterRequest {
    serviceName: string;
}
declare const FlashContainerDeregisterRequest: MessageFns<FlashContainerDeregisterRequest>;
interface FlashContainerListRequest {
    functionId: string;
}
declare const FlashContainerListRequest: MessageFns<FlashContainerListRequest>;
interface FlashContainerListResponse {
    containers: FlashContainerListResponse_Container[];
}
declare const FlashContainerListResponse: MessageFns<FlashContainerListResponse>;
interface FlashContainerListResponse_Container {
    taskId: string;
    host: string;
    port: number;
}
declare const FlashContainerListResponse_Container: MessageFns<FlashContainerListResponse_Container>;
interface FlashContainerRegisterRequest {
    /** not used? */
    serviceName: string;
    priority: number;
    weight: number;
    host: string;
    port: number;
}
declare const FlashContainerRegisterRequest: MessageFns<FlashContainerRegisterRequest>;
interface FlashContainerRegisterResponse {
    url: string;
}
declare const FlashContainerRegisterResponse: MessageFns<FlashContainerRegisterResponse>;
interface FlashSetTargetSlotsMetricsRequest {
    /** TODO(claudia): add other metrics to use in autoscaling decisions */
    functionId: string;
    targetSlots: number;
}
declare const FlashSetTargetSlotsMetricsRequest: MessageFns<FlashSetTargetSlotsMetricsRequest>;
interface FlashSetTargetSlotsMetricsResponse {
}
declare const FlashSetTargetSlotsMetricsResponse: MessageFns<FlashSetTargetSlotsMetricsResponse>;
interface FunctionMessage {
    moduleName: string;
    functionName: string;
    mountIds: string[];
    imageId: string;
    functionSerialized: Uint8Array;
    definitionType: Function_DefinitionType;
    functionType: Function_FunctionType;
    resources: Resources | undefined;
    secretIds: string[];
    rateLimit: RateLimit | undefined;
    webhookConfig: WebhookConfig | undefined;
    sharedVolumeMounts: SharedVolumeMount[];
    proxyId?: string | undefined;
    retryPolicy: FunctionRetryPolicy | undefined;
    /** To be replaced by autoscaler_settings.max_containers */
    concurrencyLimit: number;
    timeoutSecs: number;
    ptyInfo: PTYInfo | undefined;
    classSerialized: Uint8Array;
    /** To be replaced by autoscaler_settings.scaledown_period */
    taskIdleTimeoutSecs: number;
    /** Deprecated at some point */
    cloudProvider?: CloudProvider | undefined;
    /** To be replaced by autoscaler_settings.min_containers */
    warmPoolSize: number;
    webUrl: string;
    webUrlInfo: WebUrlInfo | undefined;
    /** If set, overrides the runtime used by the function, either "runc" or "gvisor". */
    runtime: string;
    /** Formerly stub_name */
    appName: string;
    volumeMounts: VolumeMount[];
    maxConcurrentInputs: number;
    customDomainInfo: CustomDomainInfo[];
    /** For internal debugging use only. */
    workerId: string;
    /** For internal debugging use only. */
    runtimeDebug: boolean;
    /** TODO: combine into enum? */
    isBuilderFunction: boolean;
    isAutoSnapshot: boolean;
    isMethod: boolean;
    isCheckpointingFunction: boolean;
    checkpointingEnabled: boolean;
    checkpoint: CheckpointInfo | undefined;
    objectDependencies: ObjectDependency[];
    blockNetwork: boolean;
    maxInputs: number;
    s3Mounts: S3Mount[];
    cloudBucketMounts: CloudBucketMount$1[];
    schedulerPlacement?: SchedulerPlacement | undefined;
    /** if "Function" is actually a class grouping multiple methods */
    isClass: boolean;
    /** for class methods use this function id instead for invocations - the *referenced* function should have is_class=True */
    useFunctionId: string;
    /** for class methods - this method name needs to be included in the FunctionInput */
    useMethodName: string;
    classParameterInfo: ClassParameterInfo | undefined;
    /** Maximum number of inputs to fetch at once */
    batchMaxSize: number;
    /** Miliseconds to block before a response is needed */
    batchLingerMs: number;
    i6pnEnabled: boolean;
    ExperimentalConcurrentCancellations: boolean;
    targetConcurrentInputs: number;
    /** TODO(irfansharif): Remove, once https://github.com/modal-labs/modal/pull/15645 lands. */
    ExperimentalTaskTemplatesEnabled: boolean;
    /** for fallback options, where the first/most-preferred "template" is derived from fields above */
    ExperimentalTaskTemplates: TaskTemplate[];
    /**
     * When the function is a "grouped" one, this records the # of tasks we want
     * to schedule in tandem.
     */
    ExperimentalGroupSize: number;
    /** If set, the function will be run in an untrusted environment. */
    untrusted: boolean;
    /** To be replaced by autoscaler_settings.buffer_containers */
    ExperimentalBufferContainers: number;
    /**
     * _experimental_proxy_ip -> ProxyInfo
     * TODO: deprecate.
     */
    ExperimentalProxyIp?: string | undefined;
    /** For internal debugging use only. */
    runtimePerfRecord: boolean;
    schedule: Schedule | undefined;
    /** For internal debugging use only. */
    snapshotDebug: boolean;
    /** Mapping of method names to method definitions, only non-empty for class service functions */
    methodDefinitions: {
        [key: string]: MethodDefinition;
    };
    methodDefinitionsSet: boolean;
    ExperimentalCustomScaling: boolean;
    /** Supersedes cloud_provider */
    cloudProviderStr: string;
    /** Experimental support for GPU snapshotting */
    ExperimentalEnableGpuSnapshot: boolean;
    /** Bundle of parameters related to autoscaling */
    autoscalerSettings: AutoscalerSettings | undefined;
    /** Function schema, may be missing: client doesn't block deployment if it fails to get it */
    functionSchema: FunctionSchema | undefined;
    /**
     * For server-side experimental functionality. Prefer using this over individual _experimental_* fields.
     * Note the value type as string. Internally we'll coerce all values to string with str().
     * On the server, it's necessary to convert back to the most natural type (e.g. int) when relevant.
     */
    experimentalOptions: {
        [key: string]: string;
    };
    /**
     * If set, client deps will be mounted into the container, and are
     * no longer expected to exist in the image itself.
     */
    mountClientDependencies: boolean;
    flashServiceUrls: string[];
    flashServiceLabel: string;
    /** GPU memory snapshotting (alpha) */
    enableGpuSnapshot: boolean;
    startupTimeoutSecs: number;
    /** can be used as inputs */
    supportedInputFormats: DataFormat[];
    supportedOutputFormats: DataFormat[];
}
declare const FunctionMessage: MessageFns<FunctionMessage>;
interface FunctionAsyncInvokeRequest {
    functionId: string;
    parentInputId: string;
    input: FunctionInput | undefined;
}
declare const FunctionAsyncInvokeRequest: MessageFns<FunctionAsyncInvokeRequest>;
interface FunctionAsyncInvokeResponse {
    retryWithBlobUpload: boolean;
    functionCallId: string;
}
declare const FunctionAsyncInvokeResponse: MessageFns<FunctionAsyncInvokeResponse>;
interface FunctionBindParamsRequest {
    functionId: string;
    serializedParams: Uint8Array;
    functionOptions: FunctionOptions | undefined;
    environmentName: string;
    /** Only used for the input plane. */
    authSecret: string;
}
declare const FunctionBindParamsRequest: MessageFns<FunctionBindParamsRequest>;
interface FunctionBindParamsResponse {
    boundFunctionId: string;
    handleMetadata: FunctionHandleMetadata | undefined;
}
declare const FunctionBindParamsResponse: MessageFns<FunctionBindParamsResponse>;
interface FunctionCallCallGraphInfo {
    functionCallId: string;
    parentInputId: string;
    functionName: string;
    moduleName: string;
}
declare const FunctionCallCallGraphInfo: MessageFns<FunctionCallCallGraphInfo>;
interface FunctionCallCancelRequest {
    functionCallId: string;
    terminateContainers: boolean;
    /** Only provided for sync input cancellation on the input plane. Async input cancellation does not provide this field this. */
    functionId?: string | undefined;
}
declare const FunctionCallCancelRequest: MessageFns<FunctionCallCancelRequest>;
interface FunctionCallFromIdRequest {
    functionCallId: string;
}
declare const FunctionCallFromIdRequest: MessageFns<FunctionCallFromIdRequest>;
/** Everything you need to build a FunctionCallHandler. */
interface FunctionCallFromIdResponse {
    functionCallId: string;
    numInputs: number;
}
declare const FunctionCallFromIdResponse: MessageFns<FunctionCallFromIdResponse>;
interface FunctionCallGetDataRequest {
    functionCallId?: string | undefined;
    attemptToken?: string | undefined;
    lastIndex: number;
}
declare const FunctionCallGetDataRequest: MessageFns<FunctionCallGetDataRequest>;
interface FunctionCallInfo {
    functionCallId: string;
    idx: number;
    /** when the call was created */
    createdAt: number;
    /** if cron job, when run was scheduled */
    scheduledAt: number;
    pendingInputs: InputCategoryInfo | undefined;
    failedInputs: InputCategoryInfo | undefined;
    succeededInputs: InputCategoryInfo | undefined;
    timeoutInputs: InputCategoryInfo | undefined;
    cancelledInputs: InputCategoryInfo | undefined;
    totalInputs: number;
}
declare const FunctionCallInfo: MessageFns<FunctionCallInfo>;
interface FunctionCallListRequest {
    functionId: string;
}
declare const FunctionCallListRequest: MessageFns<FunctionCallListRequest>;
interface FunctionCallListResponse {
    functionCalls: FunctionCallInfo[];
}
declare const FunctionCallListResponse: MessageFns<FunctionCallListResponse>;
interface FunctionCallPutDataRequest {
    functionCallId?: string | undefined;
    attemptToken?: string | undefined;
    dataChunks: DataChunk[];
}
declare const FunctionCallPutDataRequest: MessageFns<FunctionCallPutDataRequest>;
interface FunctionCreateRequest {
    function: FunctionMessage | undefined;
    appId: string;
    /**
     * Deprecated: now passed in the Function definition
     *
     * @deprecated
     */
    schedule: Schedule | undefined;
    existingFunctionId: string;
    /** supersedes 'function' field above */
    functionData: FunctionData | undefined;
}
declare const FunctionCreateRequest: MessageFns<FunctionCreateRequest>;
interface FunctionCreateResponse {
    functionId: string;
    /**
     * Used up until 0.62.212
     *
     * @deprecated
     */
    DeprecatedWebUrl: string;
    function: FunctionMessage | undefined;
    handleMetadata: FunctionHandleMetadata | undefined;
    serverWarnings: Warning[];
}
declare const FunctionCreateResponse: MessageFns<FunctionCreateResponse>;
/**
 * Note: FunctionData pulls "up" a subset of fields from Function message that
 * will get deprecated there and made authoritative here, at the top-level.
 * All remaining fields will stay within the Function message itself and a
 * single FunctionData will contain a list of such (ranked) Functions. The
 * top-level fields capture data not specific to any particular underlying
 * task (like warm-pool-size, applicable across all tasks), while fields
 * specific to the task (like the resource request) will exist at the bottom
 * level.
 */
interface FunctionData {
    moduleName: string;
    functionName: string;
    functionType: Function_FunctionType;
    /** Scheduling related fields. */
    warmPoolSize: number;
    concurrencyLimit: number;
    taskIdleTimeoutSecs: number;
    /**
     * When the function is a "grouped" one, this records the # of tasks we want
     * to schedule in tandem.
     */
    ExperimentalGroupSize: number;
    ExperimentalBufferContainers: number;
    ExperimentalCustomScaling: boolean;
    ExperimentalEnableGpuSnapshot: boolean;
    /** for internal debugging use only */
    workerId: string;
    timeoutSecs: number;
    webUrl: string;
    webUrlInfo: WebUrlInfo | undefined;
    webhookConfig: WebhookConfig | undefined;
    customDomainInfo: CustomDomainInfo[];
    /**
     * _experimental_proxy_ip -> ProxyInfo
     * TODO: deprecate.
     */
    ExperimentalProxyIp?: string | undefined;
    /** Mapping of method names to method definitions, only non-empty for class service functions */
    methodDefinitions: {
        [key: string]: MethodDefinition;
    };
    methodDefinitionsSet: boolean;
    /** if "Function" is actually a class grouping multiple methods - applies across all underlying tasks */
    isClass: boolean;
    classParameterInfo: ClassParameterInfo | undefined;
    isMethod: boolean;
    /** used for methods */
    useFunctionId: string;
    /** used for methods */
    useMethodName: string;
    rankedFunctions: FunctionData_RankedFunction[];
    schedule: Schedule | undefined;
    /** If set, the function will be run in an untrusted environment. */
    untrusted: boolean;
    /** For internal debugging use only. */
    snapshotDebug: boolean;
    /** For internal debugging use only. */
    runtimePerfRecord: boolean;
    /** Bundle of parameters related to autoscaling */
    autoscalerSettings: AutoscalerSettings | undefined;
    functionSchema: FunctionSchema | undefined;
    experimentalOptions: {
        [key: string]: string;
    };
    flashServiceUrls: string[];
    flashServiceLabel: string;
    startupTimeoutSecs: number;
    supportedInputFormats: DataFormat[];
    supportedOutputFormats: DataFormat[];
}
declare const FunctionData: MessageFns<FunctionData>;
interface FunctionData_RankedFunction {
    rank: number;
    function: FunctionMessage | undefined;
}
declare const FunctionData_RankedFunction: MessageFns<FunctionData_RankedFunction>;
interface FunctionFinishInputsRequest {
    functionId: string;
    functionCallId: string;
    numInputs: number;
}
declare const FunctionFinishInputsRequest: MessageFns<FunctionFinishInputsRequest>;
interface FunctionGetCallGraphRequest {
    /** TODO: use input_id once we switch client submit API to return those. */
    functionCallId: string;
}
declare const FunctionGetCallGraphRequest: MessageFns<FunctionGetCallGraphRequest>;
interface FunctionGetCallGraphResponse {
    inputs: InputCallGraphInfo[];
    functionCalls: FunctionCallCallGraphInfo[];
}
declare const FunctionGetCallGraphResponse: MessageFns<FunctionGetCallGraphResponse>;
interface FunctionGetCurrentStatsRequest {
    functionId: string;
}
declare const FunctionGetCurrentStatsRequest: MessageFns<FunctionGetCurrentStatsRequest>;
interface FunctionGetDynamicConcurrencyRequest {
    functionId: string;
    targetConcurrency: number;
    maxConcurrency: number;
}
declare const FunctionGetDynamicConcurrencyRequest: MessageFns<FunctionGetDynamicConcurrencyRequest>;
interface FunctionGetDynamicConcurrencyResponse {
    concurrency: number;
}
declare const FunctionGetDynamicConcurrencyResponse: MessageFns<FunctionGetDynamicConcurrencyResponse>;
interface FunctionGetInputsItem {
    inputId: string;
    input: FunctionInput | undefined;
    killSwitch: boolean;
    functionCallId: string;
    functionCallInvocationType: FunctionCallInvocationType;
    retryCount: number;
    /** intercepted and only used by the worker. */
    functionMapIdx?: number | undefined;
    attemptToken: string;
}
declare const FunctionGetInputsItem: MessageFns<FunctionGetInputsItem>;
interface FunctionGetInputsRequest {
    functionId: string;
    maxValues: number;
    averageCallTime: number;
    /** Container aims to fetch multiple inputs at the same time */
    inputConcurrency: number;
    /** Maximum number of inputs to fetch at once */
    batchMaxSize: number;
    /** Miliseconds to block before a response is needed */
    batchLingerMs: number;
}
declare const FunctionGetInputsRequest: MessageFns<FunctionGetInputsRequest>;
interface FunctionGetInputsResponse {
    inputs: FunctionGetInputsItem[];
    /** How long to sleep before requesting another input. */
    rateLimitSleepDuration: number;
}
declare const FunctionGetInputsResponse: MessageFns<FunctionGetInputsResponse>;
interface FunctionGetOutputsItem {
    result: GenericResult | undefined;
    idx: number;
    inputId: string;
    /** for result.data_oneof */
    dataFormat: DataFormat;
    taskId: string;
    inputStartedAt: number;
    outputCreatedAt: number;
    retryCount: number;
    /** datadog function call trace tag */
    fcTraceTag: string;
}
declare const FunctionGetOutputsItem: MessageFns<FunctionGetOutputsItem>;
interface FunctionGetOutputsRequest {
    functionCallId: string;
    maxValues: number;
    timeout: number;
    lastEntryId: string;
    /** expires *any* remaining outputs soon after this call, not just the returned ones */
    clearOnSuccess: boolean;
    /** Used for waypoints. */
    requestedAt: number;
    /** The jwts the client expects the server to be processing. This is optional and used for sync inputs only. */
    inputJwts: string[];
    /** for async batch requests. this indicates which index to start from. */
    startIdx?: number | undefined;
    /** for async batch requests. this indicates which index to end at. */
    endIdx?: number | undefined;
}
declare const FunctionGetOutputsRequest: MessageFns<FunctionGetOutputsRequest>;
interface FunctionGetOutputsResponse {
    idxs: number[];
    outputs: FunctionGetOutputsItem[];
    lastEntryId: string;
    numUnfinishedInputs: number;
}
declare const FunctionGetOutputsResponse: MessageFns<FunctionGetOutputsResponse>;
interface FunctionGetRequest {
    appName: string;
    objectTag: string;
    environmentName: string;
}
declare const FunctionGetRequest: MessageFns<FunctionGetRequest>;
interface FunctionGetResponse {
    functionId: string;
    handleMetadata: FunctionHandleMetadata | undefined;
    serverWarnings: Warning[];
}
declare const FunctionGetResponse: MessageFns<FunctionGetResponse>;
interface FunctionGetSerializedRequest {
    functionId: string;
}
declare const FunctionGetSerializedRequest: MessageFns<FunctionGetSerializedRequest>;
interface FunctionGetSerializedResponse {
    functionSerialized: Uint8Array;
    classSerialized: Uint8Array;
}
declare const FunctionGetSerializedResponse: MessageFns<FunctionGetSerializedResponse>;
/**
 * contains all the info about a function that is needed to trigger the right
 * behaviour when using a FunctionHandler. Notably excludes things purely
 * used for *executing* the function in a container entrypoint
 */
interface FunctionHandleMetadata {
    /** Should be a subset and use IDs/types from `Function` above */
    functionName: string;
    functionType: Function_FunctionType;
    webUrl: string;
    isMethod: boolean;
    /** used for methods */
    useFunctionId: string;
    /** used for methods */
    useMethodName: string;
    definitionId: string;
    classParameterInfo: ClassParameterInfo | undefined;
    /** Mapping of method names to their metadata, only non-empty for class service functions */
    methodHandleMetadata: {
        [key: string]: FunctionHandleMetadata;
    };
    functionSchema: FunctionSchema | undefined;
    inputPlaneUrl?: string | undefined;
    inputPlaneRegion?: string | undefined;
    /** Use optional to ensure unset values default to None instead of 0 */
    maxObjectSizeBytes?: number | undefined;
    /** (Optional) urls for flash services */
    ExperimentalFlashUrls: string[];
    supportedInputFormats: DataFormat[];
    supportedOutputFormats: DataFormat[];
}
declare const FunctionHandleMetadata: MessageFns<FunctionHandleMetadata>;
interface FunctionInput {
    args?: Uint8Array | undefined;
    argsBlobId?: string | undefined;
    finalInput: boolean;
    /** For args_oneof. */
    dataFormat: DataFormat;
    /** specifies which method to call when calling a class/object function */
    methodName?: string | undefined;
}
declare const FunctionInput: MessageFns<FunctionInput>;
interface FunctionMapRequest {
    functionId: string;
    parentInputId: string;
    returnExceptions: boolean;
    functionCallType: FunctionCallType;
    pipelinedInputs: FunctionPutInputsItem[];
    functionCallInvocationType: FunctionCallInvocationType;
    fromSpawnMap: boolean;
}
declare const FunctionMapRequest: MessageFns<FunctionMapRequest>;
interface FunctionMapResponse {
    functionCallId: string;
    pipelinedInputs: FunctionPutInputsResponseItem[];
    retryPolicy: FunctionRetryPolicy | undefined;
    functionCallJwt: string;
    syncClientRetriesEnabled: boolean;
    maxInputsOutstanding: number;
}
declare const FunctionMapResponse: MessageFns<FunctionMapResponse>;
interface FunctionOptions {
    secretIds: string[];
    /** Currently not supported */
    mountIds: string[];
    resources?: Resources | undefined;
    retryPolicy?: FunctionRetryPolicy | undefined;
    concurrencyLimit?: number | undefined;
    timeoutSecs?: number | undefined;
    taskIdleTimeoutSecs?: number | undefined;
    warmPoolSize?: number | undefined;
    volumeMounts: VolumeMount[];
    targetConcurrentInputs?: number | undefined;
    replaceVolumeMounts: boolean;
    replaceSecretIds: boolean;
    bufferContainers?: number | undefined;
    maxConcurrentInputs?: number | undefined;
    batchMaxSize?: number | undefined;
    batchLingerMs?: number | undefined;
    schedulerPlacement?: SchedulerPlacement | undefined;
    cloudProviderStr?: string | undefined;
    replaceCloudBucketMounts: boolean;
    cloudBucketMounts: CloudBucketMount$1[];
}
declare const FunctionOptions: MessageFns<FunctionOptions>;
interface FunctionPrecreateRequest {
    appId: string;
    functionName: string;
    existingFunctionId: string;
    functionType: Function_FunctionType;
    webhookConfig: WebhookConfig | undefined;
    /** for class methods - use this function id instead for invocations - the *referenced* function should have is_class=True */
    useFunctionId: string;
    /** for class methods - this method name needs to be included in the FunctionInput */
    useMethodName: string;
    /** Mapping of method names to method definitions, only non-empty for class service functions */
    methodDefinitions: {
        [key: string]: MethodDefinition;
    };
    functionSchema: FunctionSchema | undefined;
    supportedInputFormats: DataFormat[];
    supportedOutputFormats: DataFormat[];
}
declare const FunctionPrecreateRequest: MessageFns<FunctionPrecreateRequest>;
interface FunctionPrecreateResponse {
    functionId: string;
    handleMetadata: FunctionHandleMetadata | undefined;
}
declare const FunctionPrecreateResponse: MessageFns<FunctionPrecreateResponse>;
interface FunctionPutInputsItem {
    idx: number;
    input: FunctionInput | undefined;
    r2Failed: boolean;
    r2ThroughputBytesS: number;
}
declare const FunctionPutInputsItem: MessageFns<FunctionPutInputsItem>;
interface FunctionPutInputsRequest {
    functionId: string;
    functionCallId: string;
    inputs: FunctionPutInputsItem[];
}
declare const FunctionPutInputsRequest: MessageFns<FunctionPutInputsRequest>;
interface FunctionPutInputsResponse {
    inputs: FunctionPutInputsResponseItem[];
}
declare const FunctionPutInputsResponse: MessageFns<FunctionPutInputsResponse>;
interface FunctionPutInputsResponseItem {
    idx: number;
    inputId: string;
    inputJwt: string;
}
declare const FunctionPutInputsResponseItem: MessageFns<FunctionPutInputsResponseItem>;
interface FunctionPutOutputsItem {
    inputId: string;
    result: GenericResult | undefined;
    inputStartedAt: number;
    outputCreatedAt: number;
    /** for result.data_oneof */
    dataFormat: DataFormat;
    retryCount: number;
    /** injected by the worker */
    functionCallId: string;
    /** injected by the worker */
    functionMapIdx?: number | undefined;
}
declare const FunctionPutOutputsItem: MessageFns<FunctionPutOutputsItem>;
interface FunctionPutOutputsRequest {
    outputs: FunctionPutOutputsItem[];
    /** Used for waypoints. */
    requestedAt: number;
}
declare const FunctionPutOutputsRequest: MessageFns<FunctionPutOutputsRequest>;
interface FunctionRetryInputsItem {
    inputJwt: string;
    input: FunctionInput | undefined;
    retryCount: number;
}
declare const FunctionRetryInputsItem: MessageFns<FunctionRetryInputsItem>;
interface FunctionRetryInputsRequest {
    functionCallJwt: string;
    inputs: FunctionRetryInputsItem[];
}
declare const FunctionRetryInputsRequest: MessageFns<FunctionRetryInputsRequest>;
interface FunctionRetryInputsResponse {
    inputJwts: string[];
}
declare const FunctionRetryInputsResponse: MessageFns<FunctionRetryInputsResponse>;
interface FunctionRetryPolicy {
    backoffCoefficient: number;
    initialDelayMs: number;
    maxDelayMs: number;
    /** NOTE: two-byte field number not used for special reason. copy-paste error. Ref: PR #2542 */
    retries: number;
}
declare const FunctionRetryPolicy: MessageFns<FunctionRetryPolicy>;
interface FunctionSchema {
    /** allows easy disambiguation between empty schema and no schema collection etc. */
    schemaType: FunctionSchema_FunctionSchemaType;
    arguments: ClassParameterSpec[];
    returnType: GenericPayloadType | undefined;
}
declare const FunctionSchema: MessageFns<FunctionSchema>;
interface FunctionStats$1 {
    backlog: number;
    numTotalTasks: number;
}
declare const FunctionStats$1: MessageFns<FunctionStats$1>;
interface FunctionUpdateSchedulingParamsRequest {
    functionId: string;
    warmPoolSizeOverride: number;
    settings: AutoscalerSettings | undefined;
}
declare const FunctionUpdateSchedulingParamsRequest: MessageFns<FunctionUpdateSchedulingParamsRequest>;
interface FunctionUpdateSchedulingParamsResponse {
}
declare const FunctionUpdateSchedulingParamsResponse: MessageFns<FunctionUpdateSchedulingParamsResponse>;
interface GPUConfig {
    /** Deprecated, at some point */
    type: GPUType;
    count: number;
    gpuType: string;
}
declare const GPUConfig: MessageFns<GPUConfig>;
interface GenericPayloadType {
    baseType: ParameterType;
    /** sub-type for generic types like lists */
    subTypes: GenericPayloadType[];
}
declare const GenericPayloadType: MessageFns<GenericPayloadType>;
/** Used for both tasks and function outputs */
interface GenericResult {
    /** Status of the task or function output. */
    status: GenericResult_GenericStatus;
    /** Exception message for failures, if available. */
    exception: string;
    /** Status code of the container entrypoint or builder process if it terminates unexpectedly. */
    exitcode: number;
    /** String value of the Python traceback. */
    traceback: string;
    /** Pickled traceback object. */
    serializedTb: Uint8Array;
    /** Pickled line cache for traceback object. */
    tbLineCache: Uint8Array;
    /** Inline data of the result. */
    data?: Uint8Array | undefined;
    /** Blob ID for large data. */
    dataBlobId?: string | undefined;
    /** (?) */
    propagationReason: string;
}
declare const GenericResult: MessageFns<GenericResult>;
interface Image$1 {
    baseImages: BaseImage[];
    dockerfileCommands: string[];
    contextFiles: ImageContextFile[];
    version: string;
    secretIds: string[];
    /**
     * Part of Image definition, because presence of GPU drivers
     * affects the image that's built.
     */
    contextMountId: string;
    gpuConfig: GPUConfig | undefined;
    imageRegistryConfig: ImageRegistryConfig | undefined;
    /** deprecated after 0.58.96 */
    buildFunctionDef: string;
    /** deprecated after 0.58.96 */
    buildFunctionGlobals: Uint8Array;
    /** If set, overrides the runtime used by the function. Specify either "runc" or "gvisor". */
    runtime: string;
    /** Not included in image definition checksum as debug features do not affect built image. */
    runtimeDebug: boolean;
    buildFunction: BuildFunction | undefined;
    /** Build arguments for the image (--build-arg) for ARG substitution in Dockerfile. */
    buildArgs: {
        [key: string]: string;
    };
    /** Volume mount for RUN commands */
    volumeMounts: VolumeMount[];
}
declare const Image$1: MessageFns<Image$1>;
interface ImageContextFile {
    filename: string;
    data: Uint8Array;
}
declare const ImageContextFile: MessageFns<ImageContextFile>;
interface ImageDeleteRequest {
    imageId: string;
}
declare const ImageDeleteRequest: MessageFns<ImageDeleteRequest>;
interface ImageFromIdRequest {
    imageId: string;
}
declare const ImageFromIdRequest: MessageFns<ImageFromIdRequest>;
interface ImageFromIdResponse {
    imageId: string;
    metadata: ImageMetadata | undefined;
}
declare const ImageFromIdResponse: MessageFns<ImageFromIdResponse>;
interface ImageGetOrCreateRequest {
    image: Image$1 | undefined;
    appId: string;
    /** ignored */
    existingImageId: string;
    buildFunctionId: string;
    forceBuild: boolean;
    namespace: DeploymentNamespace;
    builderVersion: string;
    /** Only admins can publish global images, but this provides an extra failsafe */
    allowGlobalDeployment: boolean;
    /** Force the Image to build but don't clobber any Images with the same recipe in the cache */
    ignoreCache: boolean;
}
declare const ImageGetOrCreateRequest: MessageFns<ImageGetOrCreateRequest>;
interface ImageGetOrCreateResponse {
    /** image_id is set regardless if the image is built (use ImageJoinStreaming to wait for build) */
    imageId: string;
    /** result of build - only set if the image has finished building (regardless if success or not) */
    result: GenericResult | undefined;
    /** image metadata - only set if the image has built successfully */
    metadata: ImageMetadata | undefined;
}
declare const ImageGetOrCreateResponse: MessageFns<ImageGetOrCreateResponse>;
interface ImageJoinStreamingRequest {
    imageId: string;
    timeout: number;
    lastEntryId: string;
    includeLogsForFinished: boolean;
}
declare const ImageJoinStreamingRequest: MessageFns<ImageJoinStreamingRequest>;
interface ImageJoinStreamingResponse {
    result: GenericResult | undefined;
    taskLogs: TaskLogs[];
    entryId: string;
    eof: boolean;
    /** set on success */
    metadata: ImageMetadata | undefined;
}
declare const ImageJoinStreamingResponse: MessageFns<ImageJoinStreamingResponse>;
interface ImageMetadata {
    /** The output of `python -VV. Not set if missing */
    pythonVersionInfo?: string | undefined;
    /**
     * Installed python packages, as listed by by `pip list`.
     * package name -> version. Empty if missing
     */
    pythonPackages: {
        [key: string]: string;
    };
    /**
     * The working directory of the image, as an absolute file path.
     *
     * For most images, this is not set, which means to use the default workdir:
     * - On function runners, the default is `/root` (home directory).
     * - For image builds and sandbox environments, it is `/`.
     */
    workdir?: string | undefined;
    /** The version of glibc in this image, if any. */
    libcVersionInfo?: string | undefined;
    /** The builder version for/with which the image was created. */
    imageBuilderVersion?: string | undefined;
}
declare const ImageMetadata: MessageFns<ImageMetadata>;
interface ImageRegistryConfig {
    registryAuthType: RegistryAuthType;
    secretId: string;
}
declare const ImageRegistryConfig: MessageFns<ImageRegistryConfig>;
interface InputCallGraphInfo {
    inputId: string;
    status: GenericResult_GenericStatus;
    functionCallId: string;
    taskId: string;
}
declare const InputCallGraphInfo: MessageFns<InputCallGraphInfo>;
interface InputCategoryInfo {
    total: number;
    latest: InputInfo[];
}
declare const InputCategoryInfo: MessageFns<InputCategoryInfo>;
interface InputInfo {
    inputId: string;
    idx: number;
    taskId: string;
    startedAt: number;
    finishedAt: number;
    taskStartupTime: number;
    taskFirstInput: boolean;
}
declare const InputInfo: MessageFns<InputInfo>;
interface ListPagination {
    maxObjects: number;
    createdBefore: number;
}
declare const ListPagination: MessageFns<ListPagination>;
interface MapAwaitRequest {
    functionCallId?: string | undefined;
    mapToken?: string | undefined;
    lastEntryId: string;
    /** Used for waypoints. */
    requestedAt: number;
    timeout: number;
}
declare const MapAwaitRequest: MessageFns<MapAwaitRequest>;
interface MapAwaitResponse {
    outputs: FunctionGetOutputsItem[];
    lastEntryId: string;
}
declare const MapAwaitResponse: MessageFns<MapAwaitResponse>;
interface MapCheckInputsRequest {
    lastEntryId: string;
    timeout: number;
    attemptTokens: string[];
}
declare const MapCheckInputsRequest: MessageFns<MapCheckInputsRequest>;
interface MapCheckInputsResponse {
    lost: boolean[];
}
declare const MapCheckInputsResponse: MessageFns<MapCheckInputsResponse>;
interface MapStartOrContinueItem {
    input: FunctionPutInputsItem | undefined;
    /** None if this is a fresh input, otherwise it is the attempt token for a retry. */
    attemptToken?: string | undefined;
}
declare const MapStartOrContinueItem: MessageFns<MapStartOrContinueItem>;
interface MapStartOrContinueRequest {
    functionId: string;
    parentInputId: string;
    functionCallId?: string | undefined;
    mapToken?: string | undefined;
    items: MapStartOrContinueItem[];
}
declare const MapStartOrContinueRequest: MessageFns<MapStartOrContinueRequest>;
interface MapStartOrContinueResponse {
    /**
     * function_id and function_call_id are not necessary if map_token is provided.
     * All 3 will be sent until it is safe to only send map_token.
     */
    mapToken: string;
    functionId: string;
    functionCallId: string;
    maxInputsOutstanding: number;
    attemptTokens: string[];
    retryPolicy: FunctionRetryPolicy | undefined;
}
declare const MapStartOrContinueResponse: MessageFns<MapStartOrContinueResponse>;
interface MethodDefinition {
    functionName: string;
    functionType: Function_FunctionType;
    webhookConfig: WebhookConfig | undefined;
    webUrl: string;
    webUrlInfo: WebUrlInfo | undefined;
    customDomainInfo: CustomDomainInfo[];
    functionSchema: FunctionSchema | undefined;
    supportedInputFormats: DataFormat[];
    supportedOutputFormats: DataFormat[];
}
declare const MethodDefinition: MessageFns<MethodDefinition>;
interface MountFile {
    filename: string;
    /** SHA-256 checksum of the file. */
    sha256Hex: string;
    /** Size of the file in bytes — ignored in MountBuild(). */
    size?: number | undefined;
    /** Unix file permission bits `st_mode`. */
    mode?: number | undefined;
}
declare const MountFile: MessageFns<MountFile>;
interface MountGetOrCreateRequest {
    deploymentName: string;
    namespace: DeploymentNamespace;
    environmentName: string;
    objectCreationType: ObjectCreationType;
    files: MountFile[];
    /** only used with OBJECT_CREATION_TYPE_ANONYMOUS_OWNED_BY_APP */
    appId: string;
}
declare const MountGetOrCreateRequest: MessageFns<MountGetOrCreateRequest>;
interface MountGetOrCreateResponse {
    mountId: string;
    handleMetadata: MountHandleMetadata | undefined;
}
declare const MountGetOrCreateResponse: MessageFns<MountGetOrCreateResponse>;
interface MountHandleMetadata {
    contentChecksumSha256Hex: string;
}
declare const MountHandleMetadata: MessageFns<MountHandleMetadata>;
interface MountPutFileRequest {
    sha256Hex: string;
    data?: Uint8Array | undefined;
    dataBlobId?: string | undefined;
}
declare const MountPutFileRequest: MessageFns<MountPutFileRequest>;
interface MountPutFileResponse {
    exists: boolean;
}
declare const MountPutFileResponse: MessageFns<MountPutFileResponse>;
interface MultiPartUpload {
    /** split upload based on this part length - all except the last part must have this length */
    partLength: number;
    uploadUrls: string[];
    completionUrl: string;
}
declare const MultiPartUpload: MessageFns<MultiPartUpload>;
interface MultiPartUploadList {
    items: MultiPartUpload[];
}
declare const MultiPartUploadList: MessageFns<MultiPartUploadList>;
interface NetworkAccess {
    networkAccessType: NetworkAccess_NetworkAccessType;
    allowedCidrs: string[];
}
declare const NetworkAccess: MessageFns<NetworkAccess>;
interface NotebookKernelPublishResultsRequest {
    notebookId: string;
    results: NotebookKernelPublishResultsRequest_CellResult[];
}
declare const NotebookKernelPublishResultsRequest: MessageFns<NotebookKernelPublishResultsRequest>;
/**
 * See kernelshim.py for the differences between this and `ExecuteResult`.
 * https://jupyter-client.readthedocs.io/en/stable/messaging.html#execution-results
 */
interface NotebookKernelPublishResultsRequest_ExecuteReply {
    status: string;
    executionCount: number;
    duration: number;
}
declare const NotebookKernelPublishResultsRequest_ExecuteReply: MessageFns<NotebookKernelPublishResultsRequest_ExecuteReply>;
/** IOPub message or reply received from the kernel for a cell. */
interface NotebookKernelPublishResultsRequest_CellResult {
    cellId: string;
    /** Persistent output that is saved in the notebook. */
    output?: NotebookOutput | undefined;
    /** Clear all previous outputs of the cell. */
    clearOutput?: boolean | undefined;
    /** Cell has finished executing, return the kernel's execute_reply. */
    executeReply?: NotebookKernelPublishResultsRequest_ExecuteReply | undefined;
}
declare const NotebookKernelPublishResultsRequest_CellResult: MessageFns<NotebookKernelPublishResultsRequest_CellResult>;
/**
 * A single output from a notebook. When you execute a cell, it produces an
 * array of these outputs as the code runs.
 *
 * https://github.com/jupyter/nbformat/blob/v5.10.4/nbformat/v4/nbformat.v4.schema.json#L301-L309
 */
interface NotebookOutput {
    executeResult?: NotebookOutput_ExecuteResult | undefined;
    displayData?: NotebookOutput_DisplayData | undefined;
    stream?: NotebookOutput_Stream | undefined;
    error?: NotebookOutput_Error | undefined;
}
declare const NotebookOutput: MessageFns<NotebookOutput>;
/** Result of executing a code cell. */
interface NotebookOutput_ExecuteResult {
    executionCount: number;
    /** mimebundle */
    data: {
        [key: string]: any;
    } | undefined;
    metadata: {
        [key: string]: any;
    } | undefined;
}
declare const NotebookOutput_ExecuteResult: MessageFns<NotebookOutput_ExecuteResult>;
/** Data displayed as a result of code cell execution. */
interface NotebookOutput_DisplayData {
    /** mimebundle */
    data: {
        [key: string]: any;
    } | undefined;
    metadata: {
        [key: string]: any;
    } | undefined;
    /** This should not be included in saved notebook. */
    transientDisplayId?: string | undefined;
}
declare const NotebookOutput_DisplayData: MessageFns<NotebookOutput_DisplayData>;
/** Stream output from a code cell (stdout / stderr). */
interface NotebookOutput_Stream {
    /** stdout | stderr */
    name: string;
    /** multiline_string */
    text: string;
}
declare const NotebookOutput_Stream: MessageFns<NotebookOutput_Stream>;
/** Output of an error that occurred during code cell execution. */
interface NotebookOutput_Error {
    ename: string;
    evalue: string;
    traceback: string[];
}
declare const NotebookOutput_Error: MessageFns<NotebookOutput_Error>;
interface Object_ {
    objectId: string;
    functionHandleMetadata?: FunctionHandleMetadata | undefined;
    mountHandleMetadata?: MountHandleMetadata | undefined;
    classHandleMetadata?: ClassHandleMetadata | undefined;
    sandboxHandleMetadata?: SandboxHandleMetadata | undefined;
    volumeMetadata?: VolumeMetadata | undefined;
}
declare const Object_: MessageFns<Object_>;
interface ObjectDependency {
    objectId: string;
}
declare const ObjectDependency: MessageFns<ObjectDependency>;
interface PTYInfo {
    /** Soon deprecated */
    enabled: boolean;
    winszRows: number;
    winszCols: number;
    envTerm: string;
    envColorterm: string;
    envTermProgram: string;
    ptyType: PTYInfo_PTYType;
    noTerminateOnIdleStdin: boolean;
}
declare const PTYInfo: MessageFns<PTYInfo>;
interface PortSpec {
    port: number;
    unencrypted: boolean;
    tunnelType?: TunnelType | undefined;
}
declare const PortSpec: MessageFns<PortSpec>;
interface PortSpecs {
    ports: PortSpec[];
}
declare const PortSpecs: MessageFns<PortSpecs>;
interface Proxy$1 {
    name: string;
    createdAt: number;
    environmentName: string;
    proxyId: string;
    proxyIps: ProxyIp[];
}
declare const Proxy$1: MessageFns<Proxy$1>;
interface ProxyAddIpRequest {
    proxyId: string;
}
declare const ProxyAddIpRequest: MessageFns<ProxyAddIpRequest>;
interface ProxyAddIpResponse {
    proxyIp: ProxyIp | undefined;
}
declare const ProxyAddIpResponse: MessageFns<ProxyAddIpResponse>;
interface ProxyCreateRequest {
    name: string;
    environmentName: string;
}
declare const ProxyCreateRequest: MessageFns<ProxyCreateRequest>;
interface ProxyCreateResponse {
    proxy: Proxy$1 | undefined;
}
declare const ProxyCreateResponse: MessageFns<ProxyCreateResponse>;
interface ProxyDeleteRequest {
    proxyId: string;
}
declare const ProxyDeleteRequest: MessageFns<ProxyDeleteRequest>;
interface ProxyGetOrCreateRequest {
    deploymentName: string;
    environmentName: string;
    /** must be UNSPECIFIED */
    objectCreationType: ObjectCreationType;
}
declare const ProxyGetOrCreateRequest: MessageFns<ProxyGetOrCreateRequest>;
interface ProxyGetOrCreateResponse {
    proxyId: string;
}
declare const ProxyGetOrCreateResponse: MessageFns<ProxyGetOrCreateResponse>;
interface ProxyGetRequest {
    name: string;
    environmentName: string;
}
declare const ProxyGetRequest: MessageFns<ProxyGetRequest>;
interface ProxyGetResponse {
    proxy: Proxy$1 | undefined;
}
declare const ProxyGetResponse: MessageFns<ProxyGetResponse>;
interface ProxyIp {
    proxyIp: string;
    status: ProxyIpStatus;
    createdAt: number;
    environmentName: string;
}
declare const ProxyIp: MessageFns<ProxyIp>;
interface ProxyListResponse {
    proxies: Proxy$1[];
}
declare const ProxyListResponse: MessageFns<ProxyListResponse>;
interface ProxyRemoveIpRequest {
    proxyIp: string;
}
declare const ProxyRemoveIpRequest: MessageFns<ProxyRemoveIpRequest>;
interface QueueClearRequest {
    queueId: string;
    partitionKey: Uint8Array;
    allPartitions: boolean;
}
declare const QueueClearRequest: MessageFns<QueueClearRequest>;
interface QueueDeleteRequest {
    queueId: string;
}
declare const QueueDeleteRequest: MessageFns<QueueDeleteRequest>;
interface QueueGetOrCreateRequest {
    deploymentName: string;
    environmentName: string;
    objectCreationType: ObjectCreationType;
}
declare const QueueGetOrCreateRequest: MessageFns<QueueGetOrCreateRequest>;
interface QueueGetOrCreateResponse {
    queueId: string;
    metadata: QueueMetadata | undefined;
}
declare const QueueGetOrCreateResponse: MessageFns<QueueGetOrCreateResponse>;
interface QueueGetRequest {
    queueId: string;
    timeout: number;
    nValues: number;
    partitionKey: Uint8Array;
}
declare const QueueGetRequest: MessageFns<QueueGetRequest>;
interface QueueGetResponse {
    values: Uint8Array[];
}
declare const QueueGetResponse: MessageFns<QueueGetResponse>;
interface QueueHeartbeatRequest {
    queueId: string;
}
declare const QueueHeartbeatRequest: MessageFns<QueueHeartbeatRequest>;
interface QueueItem {
    value: Uint8Array;
    entryId: string;
}
declare const QueueItem: MessageFns<QueueItem>;
interface QueueLenRequest {
    queueId: string;
    partitionKey: Uint8Array;
    total: boolean;
}
declare const QueueLenRequest: MessageFns<QueueLenRequest>;
interface QueueLenResponse {
    len: number;
}
declare const QueueLenResponse: MessageFns<QueueLenResponse>;
interface QueueListRequest {
    environmentName: string;
    /** Limit on "number of partitions" reported, since checking them is costly */
    totalSizeLimit: number;
    pagination: ListPagination | undefined;
}
declare const QueueListRequest: MessageFns<QueueListRequest>;
interface QueueListResponse {
    queues: QueueListResponse_QueueInfo[];
    environmentName: string;
}
declare const QueueListResponse: MessageFns<QueueListResponse>;
interface QueueListResponse_QueueInfo {
    name: string;
    /** Superseded by metadata, used by clients up to 1.1.2 */
    createdAt: number;
    numPartitions: number;
    totalSize: number;
    queueId: string;
    metadata: QueueMetadata | undefined;
}
declare const QueueListResponse_QueueInfo: MessageFns<QueueListResponse_QueueInfo>;
interface QueueMetadata {
    name: string;
    creationInfo: CreationInfo | undefined;
}
declare const QueueMetadata: MessageFns<QueueMetadata>;
interface QueueNextItemsRequest {
    queueId: string;
    partitionKey: Uint8Array;
    lastEntryId: string;
    /** seconds */
    itemPollTimeout: number;
}
declare const QueueNextItemsRequest: MessageFns<QueueNextItemsRequest>;
interface QueueNextItemsResponse {
    items: QueueItem[];
}
declare const QueueNextItemsResponse: MessageFns<QueueNextItemsResponse>;
interface QueuePutRequest {
    queueId: string;
    values: Uint8Array[];
    partitionKey: Uint8Array;
    partitionTtlSeconds: number;
}
declare const QueuePutRequest: MessageFns<QueuePutRequest>;
interface RateLimit {
    limit: number;
    interval: RateLimitInterval;
}
declare const RateLimit: MessageFns<RateLimit>;
interface Resources {
    /** MiB */
    memoryMb: number;
    /** milli CPU cores */
    milliCpu: number;
    gpuConfig: GPUConfig | undefined;
    /** MiB */
    memoryMbMax: number;
    /** MiB */
    ephemeralDiskMb: number;
    /** milli CPU cores */
    milliCpuMax: number;
    /** Whether to use RDMA interfaces */
    rdma: boolean;
}
declare const Resources: MessageFns<Resources>;
interface RuntimeInputMessage {
    message: Uint8Array;
    messageIndex: number;
    eof: boolean;
}
declare const RuntimeInputMessage: MessageFns<RuntimeInputMessage>;
interface RuntimeOutputBatch {
    items: RuntimeOutputMessage[];
    batchIndex: number;
    /** if an exit code is given, this is the final message that will be sent. */
    exitCode?: number | undefined;
    stdout: RuntimeOutputMessage[];
    stderr: RuntimeOutputMessage[];
    info: RuntimeOutputMessage[];
}
declare const RuntimeOutputBatch: MessageFns<RuntimeOutputBatch>;
/** Used for `modal container exec`, `modal shell`, and Sandboxes */
interface RuntimeOutputMessage {
    /** only stdout / stderr is used */
    fileDescriptor: FileDescriptor;
    message: string;
    messageBytes: Uint8Array;
}
declare const RuntimeOutputMessage: MessageFns<RuntimeOutputMessage>;
interface S3Mount {
    bucketName: string;
    mountPath: string;
    credentialsSecretId: string;
    readOnly: boolean;
}
declare const S3Mount: MessageFns<S3Mount>;
interface Sandbox$1 {
    entrypointArgs: string[];
    mountIds: string[];
    imageId: string;
    secretIds: string[];
    resources: Resources | undefined;
    /** Deprecated at some point */
    cloudProvider: CloudProvider;
    /** The max lifetime of a sandbox in seconds. */
    timeoutSecs: number;
    workdir?: string | undefined;
    nfsMounts: SharedVolumeMount[];
    /** For internal debugging use only. */
    runtimeDebug: boolean;
    blockNetwork: boolean;
    s3Mounts: S3Mount[];
    cloudBucketMounts: CloudBucketMount$1[];
    volumeMounts: VolumeMount[];
    ptyInfo: PTYInfo | undefined;
    schedulerPlacement?: SchedulerPlacement | undefined;
    /** for internal debugging use only */
    workerId: string;
    openPorts?: PortSpecs | undefined;
    i6pnEnabled: boolean;
    /** Network access configuration beyond simple allow/block. */
    networkAccess: NetworkAccess | undefined;
    proxyId?: string | undefined;
    /**
     * Enable snapshotting the sandbox (both memory and filesystem).
     * This doesn't need to be enabled to save the filesystem as an image (i.e. a filesystem-only snapshot).
     */
    enableSnapshot: boolean;
    /**
     * Used to pin gVisor version for memory-snapshottable sandboxes.
     * This field is set by the server, not the client.
     */
    snapshotVersion?: number | undefined;
    /** Supersedes cloud_provider */
    cloudProviderStr: string;
    /**
     * Specifies container runtime behavior for sandboxes which are restored from a snapshot.
     * Set by the backend at snapshot creation time.
     */
    runscRuntimeVersion?: string | undefined;
    /** If set, overrides the runtime used by the function, either "runc" or "gvisor". */
    runtime?: string | undefined;
    /** If set, the sandbox will be created with verbose logging enabled. */
    verbose: boolean;
    /** If set, the sandbox will be created with a name. */
    name?: string | undefined;
    /** Experimental options */
    experimentalOptions: {
        [key: string]: boolean;
    };
    /** Internal use only. */
    preloadPathPrefixes: string[];
    /** Optional idle timeout in seconds. If set, the sandbox will be terminated after being idle for this duration. */
    idleTimeoutSecs?: number | undefined;
    /**
     * If set, the sandbox will be created with direct sandbox commands enabled.
     * Exec commands for the sandbox will be issued directly to the sandbox
     * command router running on the Modal worker.
     */
    directSandboxCommandsEnabled: boolean;
}
declare const Sandbox$1: MessageFns<Sandbox$1>;
interface SandboxCreateConnectTokenRequest {
    sandboxId: string;
    userMetadata: string;
}
declare const SandboxCreateConnectTokenRequest: MessageFns<SandboxCreateConnectTokenRequest>;
interface SandboxCreateConnectTokenResponse {
    url: string;
    token: string;
}
declare const SandboxCreateConnectTokenResponse: MessageFns<SandboxCreateConnectTokenResponse>;
interface SandboxCreateRequest {
    appId: string;
    definition: Sandbox$1 | undefined;
    /** DEPRECATED* 7/16/2025 */
    environmentName: string;
}
declare const SandboxCreateRequest: MessageFns<SandboxCreateRequest>;
interface SandboxCreateResponse {
    sandboxId: string;
}
declare const SandboxCreateResponse: MessageFns<SandboxCreateResponse>;
/**
 * Used to get a JWT and URL for direct access to a sandbox router server
 * running on the modal-worker, so the client can issue exec commands (and other
 * operations as they become available) directly to the worker.
 * DEPRECATED: Use TaskGetCommandRouterAccessRequest instead.
 * TODO(saltzm): Remove this.
 */
interface SandboxGetCommandRouterAccessRequest {
    sandboxId: string;
}
declare const SandboxGetCommandRouterAccessRequest: MessageFns<SandboxGetCommandRouterAccessRequest>;
interface SandboxGetCommandRouterAccessResponse {
    jwt: string;
    url: string;
}
declare const SandboxGetCommandRouterAccessResponse: MessageFns<SandboxGetCommandRouterAccessResponse>;
interface SandboxGetFromNameRequest {
    sandboxName: string;
    environmentName: string;
    appName: string;
}
declare const SandboxGetFromNameRequest: MessageFns<SandboxGetFromNameRequest>;
interface SandboxGetFromNameResponse {
    sandboxId: string;
}
declare const SandboxGetFromNameResponse: MessageFns<SandboxGetFromNameResponse>;
interface SandboxGetLogsRequest {
    sandboxId: string;
    fileDescriptor: FileDescriptor;
    timeout: number;
    lastEntryId: string;
}
declare const SandboxGetLogsRequest: MessageFns<SandboxGetLogsRequest>;
interface SandboxGetResourceUsageRequest {
    sandboxId: string;
}
declare const SandboxGetResourceUsageRequest: MessageFns<SandboxGetResourceUsageRequest>;
interface SandboxGetResourceUsageResponse {
    cpuCoreNanosecs: number;
    memGibNanosecs: number;
    gpuNanosecs: number;
    gpuType?: string | undefined;
}
declare const SandboxGetResourceUsageResponse: MessageFns<SandboxGetResourceUsageResponse>;
interface SandboxGetTaskIdRequest {
    sandboxId: string;
    /** Legacy clients do not provide a timeout. New clients must always provide a timeout. */
    timeout?: number | undefined;
    /** If true, waits until the container's postStart hook has been run before returning. Useful for detecting init failures. */
    waitUntilReady: boolean;
}
declare const SandboxGetTaskIdRequest: MessageFns<SandboxGetTaskIdRequest>;
interface SandboxGetTaskIdResponse {
    /** This is None if the sandbox was terminated before a task could be scheduled. */
    taskId?: string | undefined;
    /** If the task has already exited, this is the result. */
    taskResult?: GenericResult | undefined;
}
declare const SandboxGetTaskIdResponse: MessageFns<SandboxGetTaskIdResponse>;
interface SandboxGetTunnelsRequest {
    sandboxId: string;
    timeout: number;
}
declare const SandboxGetTunnelsRequest: MessageFns<SandboxGetTunnelsRequest>;
interface SandboxGetTunnelsResponse {
    result: GenericResult | undefined;
    tunnels: TunnelData[];
}
declare const SandboxGetTunnelsResponse: MessageFns<SandboxGetTunnelsResponse>;
interface SandboxHandleMetadata {
    result: GenericResult | undefined;
}
declare const SandboxHandleMetadata: MessageFns<SandboxHandleMetadata>;
interface SandboxInfo {
    id: string;
    createdAt: number;
    taskInfo: TaskInfo | undefined;
    appId: string;
    /** TODO: Not yet exposed in client library. */
    tags: SandboxTag[];
    name: string;
}
declare const SandboxInfo: MessageFns<SandboxInfo>;
interface SandboxListRequest {
    appId: string;
    beforeTimestamp: number;
    environmentName: string;
    includeFinished: boolean;
    tags: SandboxTag[];
}
declare const SandboxListRequest: MessageFns<SandboxListRequest>;
interface SandboxListResponse {
    sandboxes: SandboxInfo[];
}
declare const SandboxListResponse: MessageFns<SandboxListResponse>;
interface SandboxRestoreRequest {
    snapshotId: string;
    sandboxNameOverride: string;
    sandboxNameOverrideType: SandboxRestoreRequest_SandboxNameOverrideType;
}
declare const SandboxRestoreRequest: MessageFns<SandboxRestoreRequest>;
interface SandboxRestoreResponse {
    sandboxId: string;
}
declare const SandboxRestoreResponse: MessageFns<SandboxRestoreResponse>;
interface SandboxSnapshotFsAsyncGetRequest {
    imageId: string;
    timeout: number;
}
declare const SandboxSnapshotFsAsyncGetRequest: MessageFns<SandboxSnapshotFsAsyncGetRequest>;
interface SandboxSnapshotFsAsyncRequest {
    sandboxId: string;
}
declare const SandboxSnapshotFsAsyncRequest: MessageFns<SandboxSnapshotFsAsyncRequest>;
interface SandboxSnapshotFsAsyncResponse {
    imageId: string;
}
declare const SandboxSnapshotFsAsyncResponse: MessageFns<SandboxSnapshotFsAsyncResponse>;
interface SandboxSnapshotFsRequest {
    sandboxId: string;
    timeout: number;
}
declare const SandboxSnapshotFsRequest: MessageFns<SandboxSnapshotFsRequest>;
interface SandboxSnapshotFsResponse {
    imageId: string;
    result: GenericResult | undefined;
    /** Metadata may be empty since we may skip it for performance reasons. */
    imageMetadata: ImageMetadata | undefined;
}
declare const SandboxSnapshotFsResponse: MessageFns<SandboxSnapshotFsResponse>;
interface SandboxSnapshotGetRequest {
    snapshotId: string;
}
declare const SandboxSnapshotGetRequest: MessageFns<SandboxSnapshotGetRequest>;
interface SandboxSnapshotGetResponse {
    snapshotId: string;
}
declare const SandboxSnapshotGetResponse: MessageFns<SandboxSnapshotGetResponse>;
interface SandboxSnapshotRequest {
    sandboxId: string;
}
declare const SandboxSnapshotRequest: MessageFns<SandboxSnapshotRequest>;
interface SandboxSnapshotResponse {
    snapshotId: string;
}
declare const SandboxSnapshotResponse: MessageFns<SandboxSnapshotResponse>;
interface SandboxSnapshotWaitRequest {
    snapshotId: string;
    timeout: number;
}
declare const SandboxSnapshotWaitRequest: MessageFns<SandboxSnapshotWaitRequest>;
interface SandboxSnapshotWaitResponse {
    result: GenericResult | undefined;
}
declare const SandboxSnapshotWaitResponse: MessageFns<SandboxSnapshotWaitResponse>;
interface SandboxStdinWriteRequest {
    sandboxId: string;
    input: Uint8Array;
    index: number;
    eof: boolean;
}
declare const SandboxStdinWriteRequest: MessageFns<SandboxStdinWriteRequest>;
interface SandboxStdinWriteResponse {
}
declare const SandboxStdinWriteResponse: MessageFns<SandboxStdinWriteResponse>;
interface SandboxTag {
    tagName: string;
    tagValue: string;
}
declare const SandboxTag: MessageFns<SandboxTag>;
interface SandboxTagsGetRequest {
    sandboxId: string;
}
declare const SandboxTagsGetRequest: MessageFns<SandboxTagsGetRequest>;
interface SandboxTagsGetResponse {
    tags: SandboxTag[];
}
declare const SandboxTagsGetResponse: MessageFns<SandboxTagsGetResponse>;
interface SandboxTagsSetRequest {
    environmentName: string;
    sandboxId: string;
    tags: SandboxTag[];
}
declare const SandboxTagsSetRequest: MessageFns<SandboxTagsSetRequest>;
interface SandboxTerminateRequest {
    sandboxId: string;
}
declare const SandboxTerminateRequest: MessageFns<SandboxTerminateRequest>;
interface SandboxTerminateResponse {
    existingResult: GenericResult | undefined;
}
declare const SandboxTerminateResponse: MessageFns<SandboxTerminateResponse>;
interface SandboxWaitRequest {
    sandboxId: string;
    timeout: number;
}
declare const SandboxWaitRequest: MessageFns<SandboxWaitRequest>;
interface SandboxWaitResponse {
    result: GenericResult | undefined;
}
declare const SandboxWaitResponse: MessageFns<SandboxWaitResponse>;
interface Schedule {
    cron?: Schedule_Cron | undefined;
    period?: Schedule_Period | undefined;
}
declare const Schedule: MessageFns<Schedule>;
interface Schedule_Cron {
    cronString: string;
    timezone: string;
}
declare const Schedule_Cron: MessageFns<Schedule_Cron>;
interface Schedule_Period {
    years: number;
    months: number;
    weeks: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}
declare const Schedule_Period: MessageFns<Schedule_Period>;
/**
 * TODO(irfansharif):
 * - Fold in cloud, resource needs here too.
 * - Allow specifying list of zones, cloud, fallback and alternative
 *   GPU types.
 */
interface SchedulerPlacement {
    regions: string[];
    /** TODO(irfansharif): Make these two repeated. */
    Zone?: string | undefined;
    /** admin-only, "on-demand" or "spot", else ignored */
    Lifecycle?: string | undefined;
    /** admin-only */
    InstanceTypes: string[];
}
declare const SchedulerPlacement: MessageFns<SchedulerPlacement>;
interface SecretDeleteRequest {
    secretId: string;
}
declare const SecretDeleteRequest: MessageFns<SecretDeleteRequest>;
interface SecretGetOrCreateRequest {
    deploymentName: string;
    environmentName: string;
    /** Not used atm */
    objectCreationType: ObjectCreationType;
    envDict: {
        [key: string]: string;
    };
    /** only used with OBJECT_CREATION_TYPE_ANONYMOUS_OWNED_BY_APP */
    appId: string;
    requiredKeys: string[];
}
declare const SecretGetOrCreateRequest: MessageFns<SecretGetOrCreateRequest>;
interface SecretGetOrCreateResponse {
    secretId: string;
    metadata: SecretMetadata | undefined;
}
declare const SecretGetOrCreateResponse: MessageFns<SecretGetOrCreateResponse>;
interface SecretListItem {
    label: string;
    /** Superseded by metadata, used by clients up to 1.1.2 */
    createdAt: number;
    lastUsedAt: number;
    /** Unused by client */
    environmentName: string;
    secretId: string;
    metadata: SecretMetadata | undefined;
}
declare const SecretListItem: MessageFns<SecretListItem>;
interface SecretListRequest {
    environmentName: string;
    pagination: ListPagination | undefined;
}
declare const SecretListRequest: MessageFns<SecretListRequest>;
interface SecretListResponse {
    items: SecretListItem[];
    environmentName: string;
}
declare const SecretListResponse: MessageFns<SecretListResponse>;
interface SecretMetadata {
    name: string;
    creationInfo: CreationInfo | undefined;
}
declare const SecretMetadata: MessageFns<SecretMetadata>;
interface SharedVolumeDeleteRequest {
    sharedVolumeId: string;
}
declare const SharedVolumeDeleteRequest: MessageFns<SharedVolumeDeleteRequest>;
interface SharedVolumeGetFileRequest {
    sharedVolumeId: string;
    path: string;
}
declare const SharedVolumeGetFileRequest: MessageFns<SharedVolumeGetFileRequest>;
interface SharedVolumeGetFileResponse {
    data?: Uint8Array | undefined;
    dataBlobId?: string | undefined;
}
declare const SharedVolumeGetFileResponse: MessageFns<SharedVolumeGetFileResponse>;
interface SharedVolumeGetOrCreateRequest {
    deploymentName: string;
    environmentName: string;
    objectCreationType: ObjectCreationType;
    /** only used with OBJECT_CREATION_TYPE_ANONYMOUS_OWNED_BY_APP */
    appId: string;
}
declare const SharedVolumeGetOrCreateRequest: MessageFns<SharedVolumeGetOrCreateRequest>;
interface SharedVolumeGetOrCreateResponse {
    sharedVolumeId: string;
}
declare const SharedVolumeGetOrCreateResponse: MessageFns<SharedVolumeGetOrCreateResponse>;
interface SharedVolumeHeartbeatRequest {
    sharedVolumeId: string;
}
declare const SharedVolumeHeartbeatRequest: MessageFns<SharedVolumeHeartbeatRequest>;
interface SharedVolumeListFilesRequest {
    sharedVolumeId: string;
    path: string;
}
declare const SharedVolumeListFilesRequest: MessageFns<SharedVolumeListFilesRequest>;
interface SharedVolumeListFilesResponse {
    entries: FileEntry[];
}
declare const SharedVolumeListFilesResponse: MessageFns<SharedVolumeListFilesResponse>;
interface SharedVolumeListItem {
    /** app name of object entity app */
    label: string;
    sharedVolumeId: string;
    createdAt: number;
    cloudProvider: CloudProvider;
}
declare const SharedVolumeListItem: MessageFns<SharedVolumeListItem>;
interface SharedVolumeListRequest {
    environmentName: string;
}
declare const SharedVolumeListRequest: MessageFns<SharedVolumeListRequest>;
interface SharedVolumeListResponse {
    items: SharedVolumeListItem[];
    environmentName: string;
}
declare const SharedVolumeListResponse: MessageFns<SharedVolumeListResponse>;
interface SharedVolumeMount {
    mountPath: string;
    sharedVolumeId: string;
    cloudProvider: CloudProvider;
}
declare const SharedVolumeMount: MessageFns<SharedVolumeMount>;
interface SharedVolumePutFileRequest {
    sharedVolumeId: string;
    path: string;
    sha256Hex: string;
    data?: Uint8Array | undefined;
    dataBlobId?: string | undefined;
    /** remove when required client version >= 47 */
    resumable: boolean;
}
declare const SharedVolumePutFileRequest: MessageFns<SharedVolumePutFileRequest>;
interface SharedVolumePutFileResponse {
    exists: boolean;
}
declare const SharedVolumePutFileResponse: MessageFns<SharedVolumePutFileResponse>;
interface SharedVolumeRemoveFileRequest {
    sharedVolumeId: string;
    path: string;
    recursive: boolean;
}
declare const SharedVolumeRemoveFileRequest: MessageFns<SharedVolumeRemoveFileRequest>;
interface SystemErrorMessage {
    errorCode: SystemErrorCode;
    errorMessage: string;
}
declare const SystemErrorMessage: MessageFns<SystemErrorMessage>;
interface TaskClusterHelloRequest {
    taskId: string;
    containerIp: string;
}
declare const TaskClusterHelloRequest: MessageFns<TaskClusterHelloRequest>;
interface TaskClusterHelloResponse {
    clusterId: string;
    clusterRank: number;
    /** All IPv6 addresses in cluster, ordered by cluster rank */
    containerIps: string[];
    containerIpv4Ips: string[];
}
declare const TaskClusterHelloResponse: MessageFns<TaskClusterHelloResponse>;
interface TaskCurrentInputsResponse {
    inputIds: string[];
}
declare const TaskCurrentInputsResponse: MessageFns<TaskCurrentInputsResponse>;
interface TaskGetAutoscalingMetricsRequest {
    taskId: string;
}
declare const TaskGetAutoscalingMetricsRequest: MessageFns<TaskGetAutoscalingMetricsRequest>;
interface TaskGetAutoscalingMetricsResponse {
    metrics: AutoscalingMetrics | undefined;
}
declare const TaskGetAutoscalingMetricsResponse: MessageFns<TaskGetAutoscalingMetricsResponse>;
/**
 * Used to get a JWT and URL for direct access to a task command router
 * running on the modal-worker, so the client can issue exec commands (and other
 * operations as they become available) directly to the worker.
 */
interface TaskGetCommandRouterAccessRequest {
    taskId: string;
}
declare const TaskGetCommandRouterAccessRequest: MessageFns<TaskGetCommandRouterAccessRequest>;
interface TaskGetCommandRouterAccessResponse {
    jwt: string;
    url: string;
}
declare const TaskGetCommandRouterAccessResponse: MessageFns<TaskGetCommandRouterAccessResponse>;
interface TaskInfo {
    id: string;
    startedAt: number;
    finishedAt: number;
    result: GenericResult | undefined;
    enqueuedAt: number;
    gpuType: string;
    sandboxId: string;
    snapshotBehavior: TaskSnapshotBehavior;
    gpuConfig: GPUConfig | undefined;
}
declare const TaskInfo: MessageFns<TaskInfo>;
interface TaskListRequest {
    environmentName: string;
}
declare const TaskListRequest: MessageFns<TaskListRequest>;
interface TaskListResponse {
    tasks: TaskStats[];
}
declare const TaskListResponse: MessageFns<TaskListResponse>;
interface TaskLogs {
    data: string;
    taskState: TaskState;
    timestamp: number;
    fileDescriptor: FileDescriptor;
    taskProgress: TaskProgress | undefined;
    functionCallId: string;
    inputId: string;
    timestampNs: number;
}
declare const TaskLogs: MessageFns<TaskLogs>;
interface TaskLogsBatch {
    taskId: string;
    items: TaskLogs[];
    entryId: string;
    appDone: boolean;
    functionId: string;
    inputId: string;
    /** Used for image logs */
    imageId: string;
    eof: boolean;
    /** Used for interactive functions */
    ptyExecId: string;
    rootFunctionId: string;
    ttlDays: number;
}
declare const TaskLogsBatch: MessageFns<TaskLogsBatch>;
interface TaskProgress {
    len: number;
    pos: number;
    progressType: ProgressType;
    description: string;
}
declare const TaskProgress: MessageFns<TaskProgress>;
interface TaskResultRequest {
    result: GenericResult | undefined;
}
declare const TaskResultRequest: MessageFns<TaskResultRequest>;
interface TaskStats {
    taskId: string;
    appId: string;
    appDescription: string;
    startedAt: number;
}
declare const TaskStats: MessageFns<TaskStats>;
interface TaskTemplate {
    rank: number;
    resources: Resources | undefined;
    targetConcurrentInputs: number;
    maxConcurrentInputs: number;
    /**
     * TODO(irfansharif): Just move this into a column in the task table instead?
     * Deprecate all above fields and get rid of this message altogether
     */
    index: number;
}
declare const TaskTemplate: MessageFns<TaskTemplate>;
interface TokenFlowCreateRequest {
    utmSource: string;
    localhostPort: number;
    nextUrl: string;
}
declare const TokenFlowCreateRequest: MessageFns<TokenFlowCreateRequest>;
interface TokenFlowCreateResponse {
    tokenFlowId: string;
    webUrl: string;
    code: string;
    waitSecret: string;
}
declare const TokenFlowCreateResponse: MessageFns<TokenFlowCreateResponse>;
interface TokenFlowWaitRequest {
    timeout: number;
    tokenFlowId: string;
    waitSecret: string;
}
declare const TokenFlowWaitRequest: MessageFns<TokenFlowWaitRequest>;
interface TokenFlowWaitResponse {
    tokenId: string;
    tokenSecret: string;
    timeout: boolean;
    workspaceUsername: string;
}
declare const TokenFlowWaitResponse: MessageFns<TokenFlowWaitResponse>;
interface TunnelData {
    host: string;
    port: number;
    unencryptedHost?: string | undefined;
    unencryptedPort?: number | undefined;
    containerPort: number;
}
declare const TunnelData: MessageFns<TunnelData>;
interface TunnelStartRequest {
    port: number;
    unencrypted: boolean;
    tunnelType?: TunnelType | undefined;
}
declare const TunnelStartRequest: MessageFns<TunnelStartRequest>;
interface TunnelStartResponse {
    host: string;
    port: number;
    unencryptedHost?: string | undefined;
    unencryptedPort?: number | undefined;
}
declare const TunnelStartResponse: MessageFns<TunnelStartResponse>;
interface TunnelStopRequest {
    port: number;
}
declare const TunnelStopRequest: MessageFns<TunnelStopRequest>;
interface TunnelStopResponse {
    exists: boolean;
}
declare const TunnelStopResponse: MessageFns<TunnelStopResponse>;
interface UploadUrlList {
    items: string[];
}
declare const UploadUrlList: MessageFns<UploadUrlList>;
interface VolumeCommitRequest {
    /**
     * NOTE(staffan): Mounting a volume in multiple locations is not supported, so volume_id alone uniquely identifies
     * a volume mount.
     */
    volumeId: string;
}
declare const VolumeCommitRequest: MessageFns<VolumeCommitRequest>;
interface VolumeCommitResponse {
    skipReload: boolean;
}
declare const VolumeCommitResponse: MessageFns<VolumeCommitResponse>;
interface VolumeCopyFiles2Request {
    volumeId: string;
    srcPaths: string[];
    dstPath: string;
    recursive: boolean;
}
declare const VolumeCopyFiles2Request: MessageFns<VolumeCopyFiles2Request>;
interface VolumeCopyFilesRequest {
    volumeId: string;
    srcPaths: string[];
    dstPath: string;
    recursive: boolean;
}
declare const VolumeCopyFilesRequest: MessageFns<VolumeCopyFilesRequest>;
interface VolumeDeleteRequest {
    volumeId: string;
    /** @deprecated */
    environmentName: string;
}
declare const VolumeDeleteRequest: MessageFns<VolumeDeleteRequest>;
interface VolumeGetFile2Request {
    volumeId: string;
    path: string;
    start: number;
    /** 0 is interpreted as 'read to end' */
    len: number;
}
declare const VolumeGetFile2Request: MessageFns<VolumeGetFile2Request>;
interface VolumeGetFile2Response {
    getUrls: string[];
    /** total file size */
    size: number;
    /** file position of first byte returned */
    start: number;
    /** number of bytes returned */
    len: number;
}
declare const VolumeGetFile2Response: MessageFns<VolumeGetFile2Response>;
interface VolumeGetFileRequest {
    volumeId: string;
    path: string;
    start: number;
    /** 0 is interpreted as 'read to end' */
    len: number;
}
declare const VolumeGetFileRequest: MessageFns<VolumeGetFileRequest>;
interface VolumeGetFileResponse {
    data?: Uint8Array | undefined;
    dataBlobId?: string | undefined;
    /** total file size */
    size: number;
    /** file position of first byte returned */
    start: number;
    /** number of bytes returned */
    len: number;
}
declare const VolumeGetFileResponse: MessageFns<VolumeGetFileResponse>;
interface VolumeGetOrCreateRequest {
    deploymentName: string;
    environmentName: string;
    objectCreationType: ObjectCreationType;
    /** only used with OBJECT_CREATION_TYPE_ANONYMOUS_OWNED_BY_APP */
    appId: string;
    version: VolumeFsVersion;
}
declare const VolumeGetOrCreateRequest: MessageFns<VolumeGetOrCreateRequest>;
interface VolumeGetOrCreateResponse {
    volumeId: string;
    /** Not used directly; version is part of the metadata */
    version: VolumeFsVersion;
    metadata: VolumeMetadata | undefined;
}
declare const VolumeGetOrCreateResponse: MessageFns<VolumeGetOrCreateResponse>;
interface VolumeHeartbeatRequest {
    volumeId: string;
}
declare const VolumeHeartbeatRequest: MessageFns<VolumeHeartbeatRequest>;
interface VolumeListFiles2Request {
    volumeId: string;
    path: string;
    recursive: boolean;
    maxEntries?: number | undefined;
}
declare const VolumeListFiles2Request: MessageFns<VolumeListFiles2Request>;
interface VolumeListFiles2Response {
    entries: FileEntry[];
}
declare const VolumeListFiles2Response: MessageFns<VolumeListFiles2Response>;
interface VolumeListFilesRequest {
    volumeId: string;
    path: string;
    recursive: boolean;
    maxEntries?: number | undefined;
}
declare const VolumeListFilesRequest: MessageFns<VolumeListFilesRequest>;
interface VolumeListFilesResponse {
    entries: FileEntry[];
}
declare const VolumeListFilesResponse: MessageFns<VolumeListFilesResponse>;
interface VolumeListItem {
    /** app name of object entity app */
    label: string;
    volumeId: string;
    /** Superseded by metadata, used by clients up to 1.1.2 */
    createdAt: number;
    metadata: VolumeMetadata | undefined;
}
declare const VolumeListItem: MessageFns<VolumeListItem>;
interface VolumeListRequest {
    environmentName: string;
    pagination: ListPagination | undefined;
}
declare const VolumeListRequest: MessageFns<VolumeListRequest>;
interface VolumeListResponse {
    items: VolumeListItem[];
    environmentName: string;
}
declare const VolumeListResponse: MessageFns<VolumeListResponse>;
interface VolumeMetadata {
    version: VolumeFsVersion;
    name: string;
    creationInfo: CreationInfo | undefined;
}
declare const VolumeMetadata: MessageFns<VolumeMetadata>;
interface VolumeMount {
    volumeId: string;
    mountPath: string;
    allowBackgroundCommits: boolean;
    readOnly: boolean;
}
declare const VolumeMount: MessageFns<VolumeMount>;
interface VolumePutFiles2Request {
    /** The ID of the volume to put/upload files into. */
    volumeId: string;
    /** List of files to put/upload. */
    files: VolumePutFiles2Request_File[];
    /**
     * If set to true, prevent overwriting existing files. (Note that we don't
     * allow overwriting existing directories with uploaded files regardless.)
     */
    disallowOverwriteExistingFiles: boolean;
}
declare const VolumePutFiles2Request: MessageFns<VolumePutFiles2Request>;
interface VolumePutFiles2Request_File {
    /**
     * Destination path of the file to be uploaded, including any parent dirs
     * etc.; for example "foo/bar/baz.txt"
     */
    path: string;
    /** The total size of the file, in bytes. */
    size: number;
    /** The blocks, in units of 8MiB, that this file consists of. */
    blocks: VolumePutFiles2Request_Block[];
    /** Unix file permission bits `st_mode`. */
    mode?: number | undefined;
}
declare const VolumePutFiles2Request_File: MessageFns<VolumePutFiles2Request_File>;
interface VolumePutFiles2Request_Block {
    /**
     * The SHA256 digest of the contents of this block, in raw (ie. 32 bytes)
     * form for compactness.
     */
    contentsSha256: Uint8Array;
    /**
     * From a previous call to `VolumePutFiles2`, we might have gotten a
     * response indicating that this block was missing.
     *
     * For such a block, this field contains the raw bytes of the body that
     * was returned from the HTTP PUT request when the client made a request
     * for the `put_url` returned in the previous `VolumePutFiles2Response`.
     */
    putResponse?: Uint8Array | undefined;
}
declare const VolumePutFiles2Request_Block: MessageFns<VolumePutFiles2Request_Block>;
interface VolumePutFiles2Response {
    /**
     * Blocks that are currently missing in the volume, because the file did not
     * exist, or because the block checksum from `blocks_sha256` in the request
     * did not match the current contents of the file.
     *
     * Values will be returned sorted by `(file_index, block_index)`.
     *
     * If this field is empty, it means that the files were uploaded successfully
     * and/or that the request was an idempotent no-op.
     */
    missingBlocks: VolumePutFiles2Response_MissingBlock[];
}
declare const VolumePutFiles2Response: MessageFns<VolumePutFiles2Response>;
interface VolumePutFiles2Response_MissingBlock {
    /** Index of the file in the original `files` field of the request. */
    fileIndex: number;
    /**
     * The index of the block in the original `files[file_index].blocks` of the
     * request.
     */
    blockIndex: number;
    /**
     * Make a HTTP PUT request to this endpoint with the blocks' contents as
     * the body.
     */
    putUrl: string;
}
declare const VolumePutFiles2Response_MissingBlock: MessageFns<VolumePutFiles2Response_MissingBlock>;
interface VolumePutFilesRequest {
    volumeId: string;
    /** TODO(staffan): This is obviously unfortunately named, but provides what we need - consider renaming. */
    files: MountFile[];
    /**
     * If set to true, prevent overwriting existing files. (Note that we don't allow overwriting
     * existing directories with uploaded files regardless.)
     */
    disallowOverwriteExistingFiles: boolean;
}
declare const VolumePutFilesRequest: MessageFns<VolumePutFilesRequest>;
interface VolumeReloadRequest {
    /**
     * NOTE(staffan): Mounting a volume in multiple locations is not supported, so volume_id alone uniquely identifies
     * a volume mount.
     */
    volumeId: string;
}
declare const VolumeReloadRequest: MessageFns<VolumeReloadRequest>;
interface VolumeRemoveFile2Request {
    volumeId: string;
    path: string;
    recursive: boolean;
}
declare const VolumeRemoveFile2Request: MessageFns<VolumeRemoveFile2Request>;
interface VolumeRemoveFileRequest {
    volumeId: string;
    path: string;
    recursive: boolean;
}
declare const VolumeRemoveFileRequest: MessageFns<VolumeRemoveFileRequest>;
interface VolumeRenameRequest {
    volumeId: string;
    name: string;
}
declare const VolumeRenameRequest: MessageFns<VolumeRenameRequest>;
interface Warning {
    type: Warning_WarningType;
    message: string;
}
declare const Warning: MessageFns<Warning>;
interface WebUrlInfo {
    truncated: boolean;
    /** @deprecated */
    hasUniqueHash: boolean;
    labelStolen: boolean;
}
declare const WebUrlInfo: MessageFns<WebUrlInfo>;
interface WebhookConfig {
    type: WebhookType;
    method: string;
    requestedSuffix: string;
    asyncMode: WebhookAsyncMode;
    customDomains: CustomDomainConfig[];
    webServerPort: number;
    webServerStartupTimeout: number;
    webEndpointDocs: boolean;
    requiresProxyAuth: boolean;
}
declare const WebhookConfig: MessageFns<WebhookConfig>;
interface WorkspaceBillingReportItem {
    objectId: string;
    description: string;
    environmentName: string;
    interval: Date | undefined;
    cost: string;
    tags: {
        [key: string]: string;
    };
}
declare const WorkspaceBillingReportItem: MessageFns<WorkspaceBillingReportItem>;
interface WorkspaceBillingReportRequest {
    /** Workspace ID will be implicit in the request metadata */
    startTimestamp: Date | undefined;
    endTimestamp: Date | undefined;
    /** e.g. 'd' or 'h'; server defines what we accept */
    resolution: string;
    tagNames: string[];
}
declare const WorkspaceBillingReportRequest: MessageFns<WorkspaceBillingReportRequest>;
interface WorkspaceNameLookupResponse {
    /** @deprecated */
    workspaceName: string;
    username: string;
}
declare const WorkspaceNameLookupResponse: MessageFns<WorkspaceNameLookupResponse>;
type ModalClientDefinition = typeof ModalClientDefinition;
declare const ModalClientDefinition: {
    readonly name: "ModalClient";
    readonly fullName: "modal.client.ModalClient";
    readonly methods: {
        /** Apps */
        readonly appClientDisconnect: {
            readonly name: "AppClientDisconnect";
            readonly requestType: MessageFns<AppClientDisconnectRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns$1<Empty>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly appCreate: {
            readonly name: "AppCreate";
            readonly requestType: MessageFns<AppCreateRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AppCreateResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly appDeploy: {
            readonly name: "AppDeploy";
            readonly requestType: MessageFns<AppDeployRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AppDeployResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly appDeploymentHistory: {
            readonly name: "AppDeploymentHistory";
            readonly requestType: MessageFns<AppDeploymentHistoryRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AppDeploymentHistoryResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly appGetByDeploymentName: {
            readonly name: "AppGetByDeploymentName";
            readonly requestType: MessageFns<AppGetByDeploymentNameRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AppGetByDeploymentNameResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly appGetLayout: {
            readonly name: "AppGetLayout";
            readonly requestType: MessageFns<AppGetLayoutRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AppGetLayoutResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly appGetLogs: {
            readonly name: "AppGetLogs";
            readonly requestType: MessageFns<AppGetLogsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<TaskLogsBatch>;
            readonly responseStream: true;
            readonly options: {};
        };
        readonly appGetObjects: {
            readonly name: "AppGetObjects";
            readonly requestType: MessageFns<AppGetObjectsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AppGetObjectsResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly appGetOrCreate: {
            readonly name: "AppGetOrCreate";
            readonly requestType: MessageFns<AppGetOrCreateRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AppGetOrCreateResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly appGetTags: {
            readonly name: "AppGetTags";
            readonly requestType: MessageFns<AppGetTagsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AppGetTagsResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly appHeartbeat: {
            readonly name: "AppHeartbeat";
            readonly requestType: MessageFns<AppHeartbeatRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns$1<Empty>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly appList: {
            readonly name: "AppList";
            readonly requestType: MessageFns<AppListRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AppListResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly appLookup: {
            readonly name: "AppLookup";
            readonly requestType: MessageFns<AppLookupRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AppLookupResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly appPublish: {
            readonly name: "AppPublish";
            readonly requestType: MessageFns<AppPublishRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AppPublishResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly appRollback: {
            readonly name: "AppRollback";
            readonly requestType: MessageFns<AppRollbackRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns$1<Empty>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly appSetObjects: {
            readonly name: "AppSetObjects";
            readonly requestType: MessageFns<AppSetObjectsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns$1<Empty>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly appSetTags: {
            readonly name: "AppSetTags";
            readonly requestType: MessageFns<AppSetTagsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns$1<Empty>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly appStop: {
            readonly name: "AppStop";
            readonly requestType: MessageFns<AppStopRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns$1<Empty>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** Input Plane */
        readonly attemptAwait: {
            readonly name: "AttemptAwait";
            readonly requestType: MessageFns<AttemptAwaitRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AttemptAwaitResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly attemptRetry: {
            readonly name: "AttemptRetry";
            readonly requestType: MessageFns<AttemptRetryRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AttemptRetryResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly attemptStart: {
            readonly name: "AttemptStart";
            readonly requestType: MessageFns<AttemptStartRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AttemptStartResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** Auth Token */
        readonly authTokenGet: {
            readonly name: "AuthTokenGet";
            readonly requestType: MessageFns<AuthTokenGetRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AuthTokenGetResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** Blobs */
        readonly blobCreate: {
            readonly name: "BlobCreate";
            readonly requestType: MessageFns<BlobCreateRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<BlobCreateResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly blobGet: {
            readonly name: "BlobGet";
            readonly requestType: MessageFns<BlobGetRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<BlobGetResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** Classes */
        readonly classCreate: {
            readonly name: "ClassCreate";
            readonly requestType: MessageFns<ClassCreateRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ClassCreateResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly classGet: {
            readonly name: "ClassGet";
            readonly requestType: MessageFns<ClassGetRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ClassGetResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** Clients */
        readonly clientHello: {
            readonly name: "ClientHello";
            readonly requestType: MessageFns$1<Empty>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ClientHelloResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** Clusters */
        readonly clusterGet: {
            readonly name: "ClusterGet";
            readonly requestType: MessageFns<ClusterGetRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ClusterGetResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly clusterList: {
            readonly name: "ClusterList";
            readonly requestType: MessageFns<ClusterListRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ClusterListResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** Container */
        readonly containerCheckpoint: {
            readonly name: "ContainerCheckpoint";
            readonly requestType: MessageFns<ContainerCheckpointRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns$1<Empty>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly containerExec: {
            readonly name: "ContainerExec";
            readonly requestType: MessageFns<ContainerExecRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ContainerExecResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly containerExecGetOutput: {
            readonly name: "ContainerExecGetOutput";
            readonly requestType: MessageFns<ContainerExecGetOutputRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RuntimeOutputBatch>;
            readonly responseStream: true;
            readonly options: {};
        };
        readonly containerExecPutInput: {
            readonly name: "ContainerExecPutInput";
            readonly requestType: MessageFns<ContainerExecPutInputRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns$1<Empty>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly containerExecWait: {
            readonly name: "ContainerExecWait";
            readonly requestType: MessageFns<ContainerExecWaitRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ContainerExecWaitResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly containerFilesystemExec: {
            readonly name: "ContainerFilesystemExec";
            readonly requestType: MessageFns<ContainerFilesystemExecRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ContainerFilesystemExecResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly containerFilesystemExecGetOutput: {
            readonly name: "ContainerFilesystemExecGetOutput";
            readonly requestType: MessageFns<ContainerFilesystemExecGetOutputRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<FilesystemRuntimeOutputBatch>;
            readonly responseStream: true;
            readonly options: {};
        };
        readonly containerHeartbeat: {
            readonly name: "ContainerHeartbeat";
            readonly requestType: MessageFns<ContainerHeartbeatRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ContainerHeartbeatResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly containerHello: {
            readonly name: "ContainerHello";
            readonly requestType: MessageFns$1<Empty>;
            readonly requestStream: false;
            readonly responseType: MessageFns$1<Empty>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly containerLog: {
            readonly name: "ContainerLog";
            readonly requestType: MessageFns<ContainerLogRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns$1<Empty>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly containerReloadVolumes: {
            readonly name: "ContainerReloadVolumes";
            readonly requestType: MessageFns<ContainerReloadVolumesRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ContainerReloadVolumesResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly containerStop: {
            readonly name: "ContainerStop";
            readonly requestType: MessageFns<ContainerStopRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ContainerStopResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** Dicts */
        readonly dictClear: {
            readonly name: "DictClear";
            readonly requestType: MessageFns<DictClearRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns$1<Empty>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly dictContains: {
            readonly name: "DictContains";
            readonly requestType: MessageFns<DictContainsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DictContainsResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly dictContents: {
            readonly name: "DictContents";
            readonly requestType: MessageFns<DictContentsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DictEntry>;
            readonly responseStream: true;
            readonly options: {};
        };
        readonly dictDelete: {
            readonly name: "DictDelete";
            readonly requestType: MessageFns<DictDeleteRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns$1<Empty>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly dictGet: {
            readonly name: "DictGet";
            readonly requestType: MessageFns<DictGetRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DictGetResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly dictGetOrCreate: {
            readonly name: "DictGetOrCreate";
            readonly requestType: MessageFns<DictGetOrCreateRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DictGetOrCreateResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly dictHeartbeat: {
            readonly name: "DictHeartbeat";
            readonly requestType: MessageFns<DictHeartbeatRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns$1<Empty>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly dictLen: {
            readonly name: "DictLen";
            readonly requestType: MessageFns<DictLenRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DictLenResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly dictList: {
            readonly name: "DictList";
            readonly requestType: MessageFns<DictListRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DictListResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly dictPop: {
            readonly name: "DictPop";
            readonly requestType: MessageFns<DictPopRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DictPopResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly dictUpdate: {
            readonly name: "DictUpdate";
            readonly requestType: MessageFns<DictUpdateRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DictUpdateResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** Domains */
        readonly domainCertificateVerify: {
            readonly name: "DomainCertificateVerify";
            readonly requestType: MessageFns<DomainCertificateVerifyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DomainCertificateVerifyResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly domainCreate: {
            readonly name: "DomainCreate";
            readonly requestType: MessageFns<DomainCreateRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DomainCreateResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly domainList: {
            readonly name: "DomainList";
            readonly requestType: MessageFns<DomainListRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DomainListResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** Environments */
        readonly environmentCreate: {
            readonly name: "EnvironmentCreate";
            readonly requestType: MessageFns<EnvironmentCreateRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns$1<Empty>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly environmentDelete: {
            readonly name: "EnvironmentDelete";
            readonly requestType: MessageFns<EnvironmentDeleteRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns$1<Empty>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly environmentGetOrCreate: {
            readonly name: "EnvironmentGetOrCreate";
            readonly requestType: MessageFns<EnvironmentGetOrCreateRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<EnvironmentGetOrCreateResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly environmentList: {
            readonly name: "EnvironmentList";
            readonly requestType: MessageFns$1<Empty>;
            readonly requestStream: false;
            readonly responseType: MessageFns<EnvironmentListResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly environmentUpdate: {
            readonly name: "EnvironmentUpdate";
            readonly requestType: MessageFns<EnvironmentUpdateRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<EnvironmentListItem>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** Modal Flash (experimental) */
        readonly flashContainerDeregister: {
            readonly name: "FlashContainerDeregister";
            readonly requestType: MessageFns<FlashContainerDeregisterRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns$1<Empty>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly flashContainerList: {
            readonly name: "FlashContainerList";
            readonly requestType: MessageFns<FlashContainerListRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<FlashContainerListResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly flashContainerRegister: {
            readonly name: "FlashContainerRegister";
            readonly requestType: MessageFns<FlashContainerRegisterRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<FlashContainerRegisterResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly flashSetTargetSlotsMetrics: {
            readonly name: "FlashSetTargetSlotsMetrics";
            readonly requestType: MessageFns<FlashSetTargetSlotsMetricsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<FlashSetTargetSlotsMetricsResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** Functions */
        readonly functionAsyncInvoke: {
            readonly name: "FunctionAsyncInvoke";
            readonly requestType: MessageFns<FunctionAsyncInvokeRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<FunctionAsyncInvokeResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly functionBindParams: {
            readonly name: "FunctionBindParams";
            readonly requestType: MessageFns<FunctionBindParamsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<FunctionBindParamsResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly functionCallCancel: {
            readonly name: "FunctionCallCancel";
            readonly requestType: MessageFns<FunctionCallCancelRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns$1<Empty>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly functionCallFromId: {
            readonly name: "FunctionCallFromId";
            readonly requestType: MessageFns<FunctionCallFromIdRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<FunctionCallFromIdResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly functionCallGetDataIn: {
            readonly name: "FunctionCallGetDataIn";
            readonly requestType: MessageFns<FunctionCallGetDataRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DataChunk>;
            readonly responseStream: true;
            readonly options: {};
        };
        readonly functionCallGetDataOut: {
            readonly name: "FunctionCallGetDataOut";
            readonly requestType: MessageFns<FunctionCallGetDataRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DataChunk>;
            readonly responseStream: true;
            readonly options: {};
        };
        readonly functionCallList: {
            readonly name: "FunctionCallList";
            readonly requestType: MessageFns<FunctionCallListRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<FunctionCallListResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly functionCallPutDataOut: {
            readonly name: "FunctionCallPutDataOut";
            readonly requestType: MessageFns<FunctionCallPutDataRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns$1<Empty>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly functionCreate: {
            readonly name: "FunctionCreate";
            readonly requestType: MessageFns<FunctionCreateRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<FunctionCreateResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** For map RPCs, to signal that all inputs have been sent */
        readonly functionFinishInputs: {
            readonly name: "FunctionFinishInputs";
            readonly requestType: MessageFns<FunctionFinishInputsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns$1<Empty>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly functionGet: {
            readonly name: "FunctionGet";
            readonly requestType: MessageFns<FunctionGetRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<FunctionGetResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly functionGetCallGraph: {
            readonly name: "FunctionGetCallGraph";
            readonly requestType: MessageFns<FunctionGetCallGraphRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<FunctionGetCallGraphResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly functionGetCurrentStats: {
            readonly name: "FunctionGetCurrentStats";
            readonly requestType: MessageFns<FunctionGetCurrentStatsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<FunctionStats$1>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly functionGetDynamicConcurrency: {
            readonly name: "FunctionGetDynamicConcurrency";
            readonly requestType: MessageFns<FunctionGetDynamicConcurrencyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<FunctionGetDynamicConcurrencyResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** For containers to request next call */
        readonly functionGetInputs: {
            readonly name: "FunctionGetInputs";
            readonly requestType: MessageFns<FunctionGetInputsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<FunctionGetInputsResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** Returns the next result(s) for an entire function call (FunctionMap) */
        readonly functionGetOutputs: {
            readonly name: "FunctionGetOutputs";
            readonly requestType: MessageFns<FunctionGetOutputsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<FunctionGetOutputsResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly functionGetSerialized: {
            readonly name: "FunctionGetSerialized";
            readonly requestType: MessageFns<FunctionGetSerializedRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<FunctionGetSerializedResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly functionMap: {
            readonly name: "FunctionMap";
            readonly requestType: MessageFns<FunctionMapRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<FunctionMapResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly functionPrecreate: {
            readonly name: "FunctionPrecreate";
            readonly requestType: MessageFns<FunctionPrecreateRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<FunctionPrecreateResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly functionPutInputs: {
            readonly name: "FunctionPutInputs";
            readonly requestType: MessageFns<FunctionPutInputsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<FunctionPutInputsResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** For containers to return result */
        readonly functionPutOutputs: {
            readonly name: "FunctionPutOutputs";
            readonly requestType: MessageFns<FunctionPutOutputsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns$1<Empty>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly functionRetryInputs: {
            readonly name: "FunctionRetryInputs";
            readonly requestType: MessageFns<FunctionRetryInputsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<FunctionRetryInputsResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly functionStartPtyShell: {
            readonly name: "FunctionStartPtyShell";
            readonly requestType: MessageFns$1<Empty>;
            readonly requestStream: false;
            readonly responseType: MessageFns$1<Empty>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly functionUpdateSchedulingParams: {
            readonly name: "FunctionUpdateSchedulingParams";
            readonly requestType: MessageFns<FunctionUpdateSchedulingParamsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<FunctionUpdateSchedulingParamsResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** Images */
        readonly imageDelete: {
            readonly name: "ImageDelete";
            readonly requestType: MessageFns<ImageDeleteRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns$1<Empty>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly imageFromId: {
            readonly name: "ImageFromId";
            readonly requestType: MessageFns<ImageFromIdRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ImageFromIdResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly imageGetOrCreate: {
            readonly name: "ImageGetOrCreate";
            readonly requestType: MessageFns<ImageGetOrCreateRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ImageGetOrCreateResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly imageJoinStreaming: {
            readonly name: "ImageJoinStreaming";
            readonly requestType: MessageFns<ImageJoinStreamingRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ImageJoinStreamingResponse>;
            readonly responseStream: true;
            readonly options: {};
        };
        /** Input Plane Map */
        readonly mapAwait: {
            readonly name: "MapAwait";
            readonly requestType: MessageFns<MapAwaitRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<MapAwaitResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly mapCheckInputs: {
            readonly name: "MapCheckInputs";
            readonly requestType: MessageFns<MapCheckInputsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<MapCheckInputsResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly mapStartOrContinue: {
            readonly name: "MapStartOrContinue";
            readonly requestType: MessageFns<MapStartOrContinueRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<MapStartOrContinueResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** Mounts */
        readonly mountGetOrCreate: {
            readonly name: "MountGetOrCreate";
            readonly requestType: MessageFns<MountGetOrCreateRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<MountGetOrCreateResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly mountPutFile: {
            readonly name: "MountPutFile";
            readonly requestType: MessageFns<MountPutFileRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<MountPutFileResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** Notebooks */
        readonly notebookKernelPublishResults: {
            readonly name: "NotebookKernelPublishResults";
            readonly requestType: MessageFns<NotebookKernelPublishResultsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns$1<Empty>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** Proxies */
        readonly proxyAddIp: {
            readonly name: "ProxyAddIp";
            readonly requestType: MessageFns<ProxyAddIpRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ProxyAddIpResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly proxyCreate: {
            readonly name: "ProxyCreate";
            readonly requestType: MessageFns<ProxyCreateRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ProxyCreateResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly proxyDelete: {
            readonly name: "ProxyDelete";
            readonly requestType: MessageFns<ProxyDeleteRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns$1<Empty>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly proxyGet: {
            readonly name: "ProxyGet";
            readonly requestType: MessageFns<ProxyGetRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ProxyGetResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly proxyGetOrCreate: {
            readonly name: "ProxyGetOrCreate";
            readonly requestType: MessageFns<ProxyGetOrCreateRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ProxyGetOrCreateResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly proxyList: {
            readonly name: "ProxyList";
            readonly requestType: MessageFns$1<Empty>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ProxyListResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly proxyRemoveIp: {
            readonly name: "ProxyRemoveIp";
            readonly requestType: MessageFns<ProxyRemoveIpRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns$1<Empty>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** Queues */
        readonly queueClear: {
            readonly name: "QueueClear";
            readonly requestType: MessageFns<QueueClearRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns$1<Empty>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly queueDelete: {
            readonly name: "QueueDelete";
            readonly requestType: MessageFns<QueueDeleteRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns$1<Empty>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly queueGet: {
            readonly name: "QueueGet";
            readonly requestType: MessageFns<QueueGetRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<QueueGetResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly queueGetOrCreate: {
            readonly name: "QueueGetOrCreate";
            readonly requestType: MessageFns<QueueGetOrCreateRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<QueueGetOrCreateResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly queueHeartbeat: {
            readonly name: "QueueHeartbeat";
            readonly requestType: MessageFns<QueueHeartbeatRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns$1<Empty>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly queueLen: {
            readonly name: "QueueLen";
            readonly requestType: MessageFns<QueueLenRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<QueueLenResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly queueList: {
            readonly name: "QueueList";
            readonly requestType: MessageFns<QueueListRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<QueueListResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly queueNextItems: {
            readonly name: "QueueNextItems";
            readonly requestType: MessageFns<QueueNextItemsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<QueueNextItemsResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly queuePut: {
            readonly name: "QueuePut";
            readonly requestType: MessageFns<QueuePutRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns$1<Empty>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** Sandboxes */
        readonly sandboxCreate: {
            readonly name: "SandboxCreate";
            readonly requestType: MessageFns<SandboxCreateRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SandboxCreateResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly sandboxCreateConnectToken: {
            readonly name: "SandboxCreateConnectToken";
            readonly requestType: MessageFns<SandboxCreateConnectTokenRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SandboxCreateConnectTokenResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly sandboxGetCommandRouterAccess: {
            readonly name: "SandboxGetCommandRouterAccess";
            readonly requestType: MessageFns<SandboxGetCommandRouterAccessRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SandboxGetCommandRouterAccessResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly sandboxGetFromName: {
            readonly name: "SandboxGetFromName";
            readonly requestType: MessageFns<SandboxGetFromNameRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SandboxGetFromNameResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly sandboxGetLogs: {
            readonly name: "SandboxGetLogs";
            readonly requestType: MessageFns<SandboxGetLogsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<TaskLogsBatch>;
            readonly responseStream: true;
            readonly options: {};
        };
        readonly sandboxGetResourceUsage: {
            readonly name: "SandboxGetResourceUsage";
            readonly requestType: MessageFns<SandboxGetResourceUsageRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SandboxGetResourceUsageResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** needed for modal container exec */
        readonly sandboxGetTaskId: {
            readonly name: "SandboxGetTaskId";
            readonly requestType: MessageFns<SandboxGetTaskIdRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SandboxGetTaskIdResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly sandboxGetTunnels: {
            readonly name: "SandboxGetTunnels";
            readonly requestType: MessageFns<SandboxGetTunnelsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SandboxGetTunnelsResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly sandboxList: {
            readonly name: "SandboxList";
            readonly requestType: MessageFns<SandboxListRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SandboxListResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly sandboxRestore: {
            readonly name: "SandboxRestore";
            readonly requestType: MessageFns<SandboxRestoreRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SandboxRestoreResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly sandboxSnapshot: {
            readonly name: "SandboxSnapshot";
            readonly requestType: MessageFns<SandboxSnapshotRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SandboxSnapshotResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly sandboxSnapshotFs: {
            readonly name: "SandboxSnapshotFs";
            readonly requestType: MessageFns<SandboxSnapshotFsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SandboxSnapshotFsResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly sandboxSnapshotFsAsync: {
            readonly name: "SandboxSnapshotFsAsync";
            readonly requestType: MessageFns<SandboxSnapshotFsAsyncRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SandboxSnapshotFsAsyncResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly sandboxSnapshotFsAsyncGet: {
            readonly name: "SandboxSnapshotFsAsyncGet";
            readonly requestType: MessageFns<SandboxSnapshotFsAsyncGetRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SandboxSnapshotFsResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly sandboxSnapshotGet: {
            readonly name: "SandboxSnapshotGet";
            readonly requestType: MessageFns<SandboxSnapshotGetRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SandboxSnapshotGetResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly sandboxSnapshotWait: {
            readonly name: "SandboxSnapshotWait";
            readonly requestType: MessageFns<SandboxSnapshotWaitRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SandboxSnapshotWaitResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly sandboxStdinWrite: {
            readonly name: "SandboxStdinWrite";
            readonly requestType: MessageFns<SandboxStdinWriteRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SandboxStdinWriteResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly sandboxTagsGet: {
            readonly name: "SandboxTagsGet";
            readonly requestType: MessageFns<SandboxTagsGetRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SandboxTagsGetResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly sandboxTagsSet: {
            readonly name: "SandboxTagsSet";
            readonly requestType: MessageFns<SandboxTagsSetRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns$1<Empty>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly sandboxTerminate: {
            readonly name: "SandboxTerminate";
            readonly requestType: MessageFns<SandboxTerminateRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SandboxTerminateResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly sandboxWait: {
            readonly name: "SandboxWait";
            readonly requestType: MessageFns<SandboxWaitRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SandboxWaitResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** Secrets */
        readonly secretDelete: {
            readonly name: "SecretDelete";
            readonly requestType: MessageFns<SecretDeleteRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns$1<Empty>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly secretGetOrCreate: {
            readonly name: "SecretGetOrCreate";
            readonly requestType: MessageFns<SecretGetOrCreateRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SecretGetOrCreateResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly secretList: {
            readonly name: "SecretList";
            readonly requestType: MessageFns<SecretListRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SecretListResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** SharedVolumes */
        readonly sharedVolumeDelete: {
            readonly name: "SharedVolumeDelete";
            readonly requestType: MessageFns<SharedVolumeDeleteRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns$1<Empty>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly sharedVolumeGetFile: {
            readonly name: "SharedVolumeGetFile";
            readonly requestType: MessageFns<SharedVolumeGetFileRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SharedVolumeGetFileResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly sharedVolumeGetOrCreate: {
            readonly name: "SharedVolumeGetOrCreate";
            readonly requestType: MessageFns<SharedVolumeGetOrCreateRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SharedVolumeGetOrCreateResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly sharedVolumeHeartbeat: {
            readonly name: "SharedVolumeHeartbeat";
            readonly requestType: MessageFns<SharedVolumeHeartbeatRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns$1<Empty>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly sharedVolumeList: {
            readonly name: "SharedVolumeList";
            readonly requestType: MessageFns<SharedVolumeListRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SharedVolumeListResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly sharedVolumeListFiles: {
            readonly name: "SharedVolumeListFiles";
            readonly requestType: MessageFns<SharedVolumeListFilesRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SharedVolumeListFilesResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly sharedVolumeListFilesStream: {
            readonly name: "SharedVolumeListFilesStream";
            readonly requestType: MessageFns<SharedVolumeListFilesRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SharedVolumeListFilesResponse>;
            readonly responseStream: true;
            readonly options: {};
        };
        readonly sharedVolumePutFile: {
            readonly name: "SharedVolumePutFile";
            readonly requestType: MessageFns<SharedVolumePutFileRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SharedVolumePutFileResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly sharedVolumeRemoveFile: {
            readonly name: "SharedVolumeRemoveFile";
            readonly requestType: MessageFns<SharedVolumeRemoveFileRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns$1<Empty>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** Tasks */
        readonly taskClusterHello: {
            readonly name: "TaskClusterHello";
            readonly requestType: MessageFns<TaskClusterHelloRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<TaskClusterHelloResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly taskCurrentInputs: {
            readonly name: "TaskCurrentInputs";
            readonly requestType: MessageFns$1<Empty>;
            readonly requestStream: false;
            readonly responseType: MessageFns<TaskCurrentInputsResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** Used for flash autoscaling */
        readonly taskGetAutoscalingMetrics: {
            readonly name: "TaskGetAutoscalingMetrics";
            readonly requestType: MessageFns<TaskGetAutoscalingMetricsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<TaskGetAutoscalingMetricsResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly taskGetCommandRouterAccess: {
            readonly name: "TaskGetCommandRouterAccess";
            readonly requestType: MessageFns<TaskGetCommandRouterAccessRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<TaskGetCommandRouterAccessResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly taskList: {
            readonly name: "TaskList";
            readonly requestType: MessageFns<TaskListRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<TaskListResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly taskResult: {
            readonly name: "TaskResult";
            readonly requestType: MessageFns<TaskResultRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns$1<Empty>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** Tokens (web auth flow) */
        readonly tokenFlowCreate: {
            readonly name: "TokenFlowCreate";
            readonly requestType: MessageFns<TokenFlowCreateRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<TokenFlowCreateResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly tokenFlowWait: {
            readonly name: "TokenFlowWait";
            readonly requestType: MessageFns<TokenFlowWaitRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<TokenFlowWaitResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** Tunnels */
        readonly tunnelStart: {
            readonly name: "TunnelStart";
            readonly requestType: MessageFns<TunnelStartRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<TunnelStartResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly tunnelStop: {
            readonly name: "TunnelStop";
            readonly requestType: MessageFns<TunnelStopRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<TunnelStopResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** Volumes */
        readonly volumeCommit: {
            readonly name: "VolumeCommit";
            readonly requestType: MessageFns<VolumeCommitRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<VolumeCommitResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly volumeCopyFiles: {
            readonly name: "VolumeCopyFiles";
            readonly requestType: MessageFns<VolumeCopyFilesRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns$1<Empty>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly volumeCopyFiles2: {
            readonly name: "VolumeCopyFiles2";
            readonly requestType: MessageFns<VolumeCopyFiles2Request>;
            readonly requestStream: false;
            readonly responseType: MessageFns$1<Empty>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly volumeDelete: {
            readonly name: "VolumeDelete";
            readonly requestType: MessageFns<VolumeDeleteRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns$1<Empty>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly volumeGetFile: {
            readonly name: "VolumeGetFile";
            readonly requestType: MessageFns<VolumeGetFileRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<VolumeGetFileResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly volumeGetFile2: {
            readonly name: "VolumeGetFile2";
            readonly requestType: MessageFns<VolumeGetFile2Request>;
            readonly requestStream: false;
            readonly responseType: MessageFns<VolumeGetFile2Response>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly volumeGetOrCreate: {
            readonly name: "VolumeGetOrCreate";
            readonly requestType: MessageFns<VolumeGetOrCreateRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<VolumeGetOrCreateResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly volumeHeartbeat: {
            readonly name: "VolumeHeartbeat";
            readonly requestType: MessageFns<VolumeHeartbeatRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns$1<Empty>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly volumeList: {
            readonly name: "VolumeList";
            readonly requestType: MessageFns<VolumeListRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<VolumeListResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly volumeListFiles: {
            readonly name: "VolumeListFiles";
            readonly requestType: MessageFns<VolumeListFilesRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<VolumeListFilesResponse>;
            readonly responseStream: true;
            readonly options: {};
        };
        readonly volumeListFiles2: {
            readonly name: "VolumeListFiles2";
            readonly requestType: MessageFns<VolumeListFiles2Request>;
            readonly requestStream: false;
            readonly responseType: MessageFns<VolumeListFiles2Response>;
            readonly responseStream: true;
            readonly options: {};
        };
        readonly volumePutFiles: {
            readonly name: "VolumePutFiles";
            readonly requestType: MessageFns<VolumePutFilesRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns$1<Empty>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly volumePutFiles2: {
            readonly name: "VolumePutFiles2";
            readonly requestType: MessageFns<VolumePutFiles2Request>;
            readonly requestStream: false;
            readonly responseType: MessageFns<VolumePutFiles2Response>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly volumeReload: {
            readonly name: "VolumeReload";
            readonly requestType: MessageFns<VolumeReloadRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns$1<Empty>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly volumeRemoveFile: {
            readonly name: "VolumeRemoveFile";
            readonly requestType: MessageFns<VolumeRemoveFileRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns$1<Empty>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly volumeRemoveFile2: {
            readonly name: "VolumeRemoveFile2";
            readonly requestType: MessageFns<VolumeRemoveFile2Request>;
            readonly requestStream: false;
            readonly responseType: MessageFns$1<Empty>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly volumeRename: {
            readonly name: "VolumeRename";
            readonly requestType: MessageFns<VolumeRenameRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns$1<Empty>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** Workspaces */
        readonly workspaceBillingReport: {
            readonly name: "WorkspaceBillingReport";
            readonly requestType: MessageFns<WorkspaceBillingReportRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<WorkspaceBillingReportItem>;
            readonly responseStream: true;
            readonly options: {};
        };
        readonly workspaceNameLookup: {
            readonly name: "WorkspaceNameLookup";
            readonly requestType: MessageFns$1<Empty>;
            readonly requestStream: false;
            readonly responseType: MessageFns<WorkspaceNameLookupResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create(base?: DeepPartial<T>): T;
    fromPartial(object: DeepPartial<T>): T;
}

/** Optional parameters for {@link SecretService#fromName client.secrets.fromName()}. */
type SecretFromNameParams = {
    environment?: string;
    requiredKeys?: string[];
};
/** Optional parameters for {@link SecretService#fromObject client.secrets.fromObject()}. */
type SecretFromObjectParams = {
    environment?: string;
};
/** Optional parameters for {@link SecretService#delete client.secrets.delete()}. */
type SecretDeleteParams = {
    environment?: string;
    allowMissing?: boolean;
};
/**
 * Service for managing {@link Secret Secrets}.
 *
 * Normally only ever accessed via the client as:
 * ```typescript
 * const modal = new ModalClient();
 * const secret = await modal.secrets.fromName("my-secret");
 * ```
 */
declare class SecretService {
    #private;
    constructor(client: ModalClient);
    /** Reference a {@link Secret} by its name. */
    fromName(name: string, params?: SecretFromNameParams): Promise<Secret>;
    /** Create a {@link Secret} from a plain object of key-value pairs. */
    fromObject(entries: Record<string, string>, params?: SecretFromObjectParams): Promise<Secret>;
    /**
     * Delete a named {@link Secret}.
     *
     * Warning: Deletion is irreversible and will affect any Apps currently using the Secret.
     */
    delete(name: string, params?: SecretDeleteParams): Promise<void>;
}
/** Secrets provide a dictionary of environment variables for {@link Image}s. */
declare class Secret {
    readonly secretId: string;
    readonly name?: string;
    /** @ignore */
    constructor(secretId: string, name?: string);
    /**
     * @deprecated Use {@link SecretService#fromName client.secrets.fromName()} instead.
     */
    static fromName(name: string, params?: SecretFromNameParams): Promise<Secret>;
    /**
     * @deprecated Use {@link SecretService#fromObject client.secrets.fromObject()} instead.
     */
    static fromObject(entries: Record<string, string>, params?: SecretFromObjectParams): Promise<Secret>;
}

declare class CloudBucketMountService {
    #private;
    constructor(client: ModalClient);
    create(bucketName: string, params?: {
        secret?: Secret;
        readOnly?: boolean;
        requesterPays?: boolean;
        bucketEndpointUrl?: string;
        keyPrefix?: string;
        oidcAuthRoleArn?: string;
    }): CloudBucketMount;
}
/** Cloud Bucket Mounts provide access to cloud storage buckets within Modal Functions. */
declare class CloudBucketMount {
    #private;
    readonly bucketName: string;
    readonly secret?: Secret;
    readonly readOnly: boolean;
    readonly requesterPays: boolean;
    readonly bucketEndpointUrl?: string;
    readonly keyPrefix?: string;
    readonly oidcAuthRoleArn?: string;
    /**
     * @deprecated Use {@link CloudBucketMountService#create client.cloudBucketMounts.create()} instead.
     */
    constructor(bucketName: string, params?: {
        secret?: Secret;
        readOnly?: boolean;
        requesterPays?: boolean;
        bucketEndpointUrl?: string;
        keyPrefix?: string;
        oidcAuthRoleArn?: string;
    });
    /** @ignore */
    constructor(bucketName: string, secret: Secret | undefined, readOnly: boolean, requesterPays: boolean, bucketEndpointUrl: string | undefined, keyPrefix: string | undefined, oidcAuthRoleArn: string | undefined, bucketType: CloudBucketMount_BucketType);
    /** @ignore */
    toProto(mountPath: string): CloudBucketMount$1;
}

/**
 * Service for managing {@link FunctionCall}s.
 *
 * Normally only ever accessed via the client as:
 *
 * ```typescript
 * const modal = new ModalClient();
 * const functionCall = await modal.functionCalls.fromId("123");
 * ```
 */
declare class FunctionCallService {
    #private;
    constructor(client: ModalClient);
    /**
     * Create a new {@link FunctionCall} from ID.
     */
    fromId(functionCallId: string): Promise<FunctionCall>;
}
/** Optional parameters for {@link FunctionCall#get FunctionCall.get()}. */
type FunctionCallGetParams = {
    timeoutMs?: number;
};
/** Optional parameters for {@link FunctionCall#cancel FunctionCall.cancel()}. */
type FunctionCallCancelParams = {
    terminateContainers?: boolean;
};
/**
 * Represents a Modal FunctionCall. FunctionCalls are {@link Function_ Function} invocations with
 * a given input. They can be consumed asynchronously (see {@link FunctionCall#get FunctionCall.get()}) or cancelled
 * (see {@link FunctionCall#cancel FunctionCall.cancel()}).
 */
declare class FunctionCall {
    #private;
    readonly functionCallId: string;
    /** @ignore */
    constructor(client: ModalClient | undefined, functionCallId: string);
    /**
     * @deprecated Use {@link FunctionCallService#fromId client.functionCalls.fromId()} instead.
     */
    static fromId(functionCallId: string): FunctionCall;
    /** Get the result of a FunctionCall, optionally waiting with a timeout. */
    get(params?: FunctionCallGetParams): Promise<any>;
    /** Cancel a running FunctionCall. */
    cancel(params?: FunctionCallCancelParams): Promise<void>;
}

/** Optional parameters for `client.functions.fromName()`. */
type FunctionFromNameParams = {
    environment?: string;
    createIfMissing?: boolean;
};
/**
 * Service for managing {@link Function_ Function}s.
 *
 * Normally only ever accessed via the client as:
 * ```typescript
 * const modal = new ModalClient();
 * const function = await modal.functions.fromName("my-app", "my-function");
 * ```
 */
declare class FunctionService {
    #private;
    constructor(client: ModalClient);
    /**
     * Reference a {@link Function_ Function} by its name in an App.
     */
    fromName(appName: string, name: string, params?: FunctionFromNameParams): Promise<Function_>;
}
/** Simple data structure storing stats for a running {@link Function_ Function}. */
interface FunctionStats {
    backlog: number;
    numTotalRunners: number;
}
/** Optional parameters for {@link Function_#updateAutoscaler Function_.updateAutoscaler()}. */
interface FunctionUpdateAutoscalerParams {
    minContainers?: number;
    maxContainers?: number;
    bufferContainers?: number;
    scaledownWindowMs?: number;
}
/** Represents a deployed Modal Function, which can be invoked remotely. */
declare class Function_ {
    #private;
    readonly functionId: string;
    readonly methodName?: string;
    /** @ignore */
    constructor(client: ModalClient, functionId: string, methodName?: string, functionHandleMetadata?: FunctionHandleMetadata);
    /**
     * @deprecated Use `client.functions.fromName()` instead.
     */
    static lookup(appName: string, name: string, params?: FunctionFromNameParams): Promise<Function_>;
    remote(args?: any[], kwargs?: Record<string, any>): Promise<any>;
    spawn(args?: any[], kwargs?: Record<string, any>): Promise<FunctionCall>;
    getCurrentStats(): Promise<FunctionStats>;
    updateAutoscaler(params: FunctionUpdateAutoscalerParams): Promise<void>;
    /**
     * URL of a Function running as a web endpoint.
     * @returns The web URL if this Function is a web endpoint, otherwise undefined
     */
    getWebUrl(): Promise<string | undefined>;
}

/** Retry policy configuration for a Modal Function/Cls. */
declare class Retries {
    readonly maxRetries: number;
    readonly backoffCoefficient: number;
    readonly initialDelayMs: number;
    readonly maxDelayMs: number;
    constructor(params: {
        maxRetries: number;
        backoffCoefficient?: number;
        initialDelayMs?: number;
        maxDelayMs?: number;
    });
}

type HeartbeatFunction = () => Promise<any>;
declare class EphemeralHeartbeatManager {
    private readonly heartbeatFn;
    private readonly abortController;
    constructor(heartbeatFn: HeartbeatFunction);
    private start;
    stop(): void;
}

/** Optional parameters for {@link VolumeService#fromName client.volumes.fromName()}. */
type VolumeFromNameParams = {
    environment?: string;
    createIfMissing?: boolean;
};
/** Optional parameters for {@link VolumeService#ephemeral client.volumes.ephemeral()}. */
type VolumeEphemeralParams = {
    environment?: string;
};
/** Optional parameters for {@link VolumeService#delete client.volumes.delete()}. */
type VolumeDeleteParams = {
    environment?: string;
    allowMissing?: boolean;
};
/**
 * Service for managing {@link Volume}s.
 *
 * Normally only ever accessed via the client as:
 * ```typescript
 * const modal = new ModalClient();
 * const volume = await modal.volumes.fromName("my-volume");
 * ```
 */
declare class VolumeService {
    #private;
    constructor(client: ModalClient);
    /**
     * Reference a {@link Volume} by its name.
     */
    fromName(name: string, params?: VolumeFromNameParams): Promise<Volume>;
    /**
     * Create a nameless, temporary {@link Volume}.
     * It persists until closeEphemeral() is called, or the process exits.
     */
    ephemeral(params?: VolumeEphemeralParams): Promise<Volume>;
    /**
     * Delete a named {@link Volume}.
     *
     * Warning: Deletion is irreversible and will affect any Apps currently using the Volume.
     */
    delete(name: string, params?: VolumeDeleteParams): Promise<void>;
}
/** Volumes provide persistent storage that can be mounted in Modal {@link Function_ Function}s. */
declare class Volume {
    #private;
    readonly volumeId: string;
    readonly name?: string;
    private _readOnly;
    /** @ignore */
    constructor(volumeId: string, name?: string, readOnly?: boolean, ephemeralHbManager?: EphemeralHeartbeatManager);
    /**
     * @deprecated Use {@link VolumeService#fromName client.volumes.fromName()} instead.
     */
    static fromName(name: string, options?: VolumeFromNameParams): Promise<Volume>;
    /** Configure Volume to mount as read-only. */
    readOnly(): Volume;
    get isReadOnly(): boolean;
    /**
     * @deprecated Use {@link VolumeService#ephemeral client.volumes.ephemeral()} instead.
     */
    static ephemeral(options?: VolumeEphemeralParams): Promise<Volume>;
    /** Delete the ephemeral Volume. Only usable with emphemeral Volumes. */
    closeEphemeral(): void;
}

/** Optional parameters for {@link ClsService#fromName client.cls.fromName()}. */
type ClsFromNameParams = {
    environment?: string;
    createIfMissing?: boolean;
};
/**
 * Service for managing {@link Cls}.
 *
 * Normally only ever accessed via the client as:
 * ```typescript
 * const modal = new ModalClient();
 * const cls = await modal.cls.fromName("my-app", "MyCls");
 * ```
 */
declare class ClsService {
    #private;
    constructor(client: ModalClient);
    /**
     * Reference a {@link Cls} from a deployed {@link App} by its name.
     */
    fromName(appName: string, name: string, params?: ClsFromNameParams): Promise<Cls>;
}
type ClsWithOptionsParams = {
    cpu?: number;
    cpuLimit?: number;
    memoryMiB?: number;
    memoryLimitMiB?: number;
    gpu?: string;
    env?: Record<string, string>;
    secrets?: Secret[];
    volumes?: Record<string, Volume>;
    retries?: number | Retries;
    maxContainers?: number;
    bufferContainers?: number;
    scaledownWindowMs?: number;
    timeoutMs?: number;
};
type ClsWithConcurrencyParams = {
    maxInputs: number;
    targetInputs?: number;
};
type ClsWithBatchingParams = {
    maxBatchSize: number;
    waitMs: number;
};
type ServiceOptions = ClsWithOptionsParams & {
    maxConcurrentInputs?: number;
    targetConcurrentInputs?: number;
    batchMaxSize?: number;
    batchWaitMs?: number;
};
/** Represents a deployed Modal Cls. */
declare class Cls {
    #private;
    /** @ignore */
    constructor(client: ModalClient, serviceFunctionId: string, serviceFunctionMetadata: FunctionHandleMetadata, options?: ServiceOptions);
    /**
     * @deprecated Use {@link ClsService#fromName client.cls.fromName()} instead.
     */
    static lookup(appName: string, name: string, params?: ClsFromNameParams): Promise<Cls>;
    /** Create a new instance of the Cls with parameters and/or runtime options. */
    instance(parameters?: Record<string, any>): Promise<ClsInstance>;
    /** Override the static Function configuration at runtime. */
    withOptions(options: ClsWithOptionsParams): Cls;
    /** Create an instance of the Cls with input concurrency enabled or overridden with new values. */
    withConcurrency(params: ClsWithConcurrencyParams): Cls;
    /** Create an instance of the Cls with dynamic batching enabled or overridden with new values. */
    withBatching(params: ClsWithBatchingParams): Cls;
}
/** Represents an instance of a deployed Modal {@link Cls}, optionally with parameters. */
declare class ClsInstance {
    #private;
    constructor(methods: Map<string, Function_>);
    method(name: string): Function_;
}

/**
 * Service for managing {@link Image}s.
 *
 * Normally only ever accessed via the client as:
 * ```typescript
 * const modal = new ModalClient();
 * const image = await modal.images.fromRegistry("alpine");
 * ```
 */
declare class ImageService {
    #private;
    constructor(client: ModalClient);
    /**
     * Creates an {@link Image} from an Image ID
     *
     * @param imageId - Image ID.
     */
    fromId(imageId: string): Promise<Image>;
    /**
     * Creates an {@link Image} from a raw registry tag, optionally using a {@link Secret} for authentication.
     *
     * @param tag - The registry tag for the Image.
     * @param secret - Optional. A Secret containing credentials for registry authentication.
     */
    fromRegistry(tag: string, secret?: Secret): Image;
    /**
     * Creates an {@link Image} from a raw registry tag, optionally using a {@link Secret} for authentication.
     *
     * @param tag - The registry tag for the Image.
     * @param secret - A Secret containing credentials for registry authentication.
     */
    fromAwsEcr(tag: string, secret: Secret): Image;
    /**
     * Creates an {@link Image} from a raw registry tag, optionally using a {@link Secret} for authentication.
     *
     * @param tag - The registry tag for the Image.
     * @param secret - A Secret containing credentials for registry authentication.
     */
    fromGcpArtifactRegistry(tag: string, secret: Secret): Image;
    /**
     * Delete an {@link Image} by ID. Warning: This removes an *entire Image*, and cannot be undone.
     */
    delete(imageId: string, _?: ImageDeleteParams): Promise<void>;
}
/** Optional parameters for {@link ImageService#delete client.images.delete()}. */
type ImageDeleteParams = Record<never, never>;
/** Optional parameters for {@link Image#dockerfileCommands Image.dockerfileCommands()}. */
type ImageDockerfileCommandsParams = {
    /** Environment variables to set in the build environment. */
    env?: Record<string, string>;
    /** {@link Secret}s that will be made available as environment variables to this layer's build environment. */
    secrets?: Secret[];
    /** GPU reservation for this layer's build environment (e.g. "A100", "T4:2", "A100-80GB:4"). */
    gpu?: string;
    /** Ignore cached builds for this layer, similar to 'docker build --no-cache'. */
    forceBuild?: boolean;
};
/** Represents a single image layer with its build configuration. */
type Layer = {
    commands: string[];
    env?: Record<string, string>;
    secrets?: Secret[];
    gpuConfig?: GPUConfig;
    forceBuild?: boolean;
};
/** A container image, used for starting {@link Sandbox}es. */
declare class Image {
    #private;
    /** @ignore */
    constructor(client: ModalClient, imageId: string, tag: string, imageRegistryConfig?: ImageRegistryConfig, layers?: Layer[]);
    get imageId(): string;
    /**
     * @deprecated Use {@link ImageService#fromId client.images.fromId()} instead.
     */
    static fromId(imageId: string): Promise<Image>;
    /**
     * @deprecated Use {@link ImageService#fromRegistry client.images.fromRegistry()} instead.
     */
    static fromRegistry(tag: string, secret?: Secret): Image;
    /**
     * @deprecated Use {@link ImageService#fromAwsEcr client.images.fromAwsEcr()} instead.
     */
    static fromAwsEcr(tag: string, secret: Secret): Image;
    /**
     * @deprecated Use {@link ImageService#fromGcpArtifactRegistry client.images.fromGcpArtifactRegistry()} instead.
     */
    static fromGcpArtifactRegistry(tag: string, secret: Secret): Image;
    private static validateDockerfileCommands;
    /**
     * Extend an image with arbitrary Dockerfile-like commands.
     *
     * Each call creates a new Image layer that will be built sequentially.
     * The provided options apply only to this layer.
     *
     * @param commands - Array of Dockerfile commands as strings
     * @param params - Optional configuration for this layer's build
     * @returns A new Image instance
     */
    dockerfileCommands(commands: string[], params?: ImageDockerfileCommandsParams): Image;
    /**
     * Eagerly builds an Image on Modal.
     *
     * @param app - App to use to build the Image.
     */
    build(app: App): Promise<Image>;
    /**
     * @deprecated Use {@link ImageService#delete client.images.delete()} instead.
     */
    static delete(imageId: string, _?: ImageDeleteParams): Promise<void>;
}

/**
 * Service for managing {@link Proxy Proxies}.
 */
declare class ProxyService {
    #private;
    constructor(client: ModalClient);
    /**
     * Reference a {@link Proxy} by its name.
     *
     * Normally only ever accessed via the client as:
     * ```typescript
     * const modal = new ModalClient();
     * const proxy = await modal.proxies.fromName("my-proxy");
     * ```
     */
    fromName(name: string, params?: ProxyFromNameParams): Promise<Proxy>;
}
/** Optional parameters for {@link ProxyService#fromName client.proxies.fromName()}. */
type ProxyFromNameParams = {
    environment?: string;
};
/** Proxy objects give your Modal containers a static outbound IP address. */
declare class Proxy {
    readonly proxyId: string;
    /** @ignore */
    constructor(proxyId: string);
    /**
     * @deprecated Use {@link ProxyService#fromName client.proxies.fromName()} instead.
     */
    static fromName(name: string, params?: ProxyFromNameParams): Promise<Proxy>;
}

/** Optional parameters for {@link QueueService#fromName client.queues.fromName()}. */
type QueueFromNameParams = {
    environment?: string;
    createIfMissing?: boolean;
};
/** Optional parameters for {@link QueueService#delete client.queues.delete()}. */
type QueueDeleteParams = {
    environment?: string;
    allowMissing?: boolean;
};
/** Optional parameters for {@link QueueService#ephemeral client.queues.ephemeral()}. */
type QueueEphemeralParams = {
    environment?: string;
};
/**
 * Service for managing {@link Queue}s.
 *
 * Normally only ever accessed via the client as:
 * ```typescript
 * const modal = new ModalClient();
 * const queue = await modal.queues.fromName("my-queue");
 * ```
 */
declare class QueueService {
    #private;
    constructor(client: ModalClient);
    /**
     * Create a nameless, temporary {@link Queue}.
     * You will need to call {@link Queue#closeEphemeral Queue.closeEphemeral()} to delete the Queue.
     */
    ephemeral(params?: QueueEphemeralParams): Promise<Queue>;
    /**
     * Reference a {@link Queue} by name.
     */
    fromName(name: string, params?: QueueFromNameParams): Promise<Queue>;
    /**
     * Delete a {@link Queue} by name.
     *
     * Warning: Deletion is irreversible and will affect any Apps currently using the Queue.
     */
    delete(name: string, params?: QueueDeleteParams): Promise<void>;
}
/** Optional parameters for {@link Queue#clear Queue.clear()}. */
type QueueClearParams = {
    /** Partition to clear, uses default partition if not set. */
    partition?: string;
    /** Set to clear all Queue partitions. */
    all?: boolean;
};
/** Optional parameters for {@link Queue#get Queue.get()}. */
type QueueGetParams = {
    /** How long to wait if the Queue is empty in milliseconds (default: indefinite). */
    timeoutMs?: number;
    /** Partition to fetch values from, uses default partition if not set. */
    partition?: string;
};
/** Optional parameters for {@link Queue#getMany Queue.getMany()}. */
type QueueGetManyParams = QueueGetParams;
/** Optional parameters for {@link Queue#put Queue.put()}. */
type QueuePutParams = {
    /** How long to wait if the Queue is full in milliseconds (default: indefinite). */
    timeoutMs?: number;
    /** Partition to add items to, uses default partition if not set. */
    partition?: string;
    /** TTL for the partition in milliseconds (default: 1 day). */
    partitionTtlMs?: number;
};
/** Optional parameters for {@link Queue#putMany Queue.putMany()}. */
type QueuePutManyParams = QueuePutParams;
/** Optional parameters for {@link Queue#len Queue.len()}. */
type QueueLenParams = {
    /** Partition to compute length, uses default partition if not set. */
    partition?: string;
    /** Return the total length across all partitions. */
    total?: boolean;
};
/** Optional parameters for {@link Queue#iterate Queue.iterate()}. */
type QueueIterateParams = {
    /** How long to wait between successive items before exiting iteration in milliseconds (default: 0). */
    itemPollTimeoutMs?: number;
    /** Partition to iterate, uses default partition if not set. */
    partition?: string;
};
/**
 * Distributed, FIFO queue for data flow in Modal {@link App Apps}.
 */
declare class Queue {
    #private;
    readonly queueId: string;
    readonly name?: string;
    /** @ignore */
    constructor(client: ModalClient, queueId: string, name?: string, ephemeralHbManager?: EphemeralHeartbeatManager);
    /**
     * @deprecated Use {@link QueueService#ephemeral client.queues.ephemeral()} instead.
     */
    static ephemeral(params?: QueueEphemeralParams): Promise<Queue>;
    /** Delete the ephemeral Queue. Only usable with ephemeral Queues. */
    closeEphemeral(): void;
    /**
     * @deprecated Use {@link QueueService#fromName client.queues.fromName()} instead.
     */
    static lookup(name: string, options?: QueueFromNameParams): Promise<Queue>;
    /**
     * @deprecated Use {@link QueueService#delete client.queues.delete()} instead.
     */
    static delete(name: string, options?: QueueDeleteParams): Promise<void>;
    /**
     * Remove all objects from a Queue partition.
     */
    clear(params?: QueueClearParams): Promise<void>;
    /**
     * Remove and return the next object from the Queue.
     *
     * By default, this will wait until at least one item is present in the Queue.
     * If `timeoutMs` is set, raises `QueueEmptyError` if no items are available
     * within that timeout in milliseconds.
     */
    get(params?: QueueGetParams): Promise<any | null>;
    /**
     * Remove and return up to `n` objects from the Queue.
     *
     * By default, this will wait until at least one item is present in the Queue.
     * If `timeoutMs` is set, raises `QueueEmptyError` if no items are available
     * within that timeout in milliseconds.
     */
    getMany(n: number, params?: QueueGetManyParams): Promise<any[]>;
    /**
     * Add an item to the end of the Queue.
     *
     * If the Queue is full, this will retry with exponential backoff until the
     * provided `timeoutMs` is reached, or indefinitely if `timeoutMs` is not set.
     * Raises {@link QueueFullError} if the Queue is still full after the timeout.
     */
    put(v: any, params?: QueuePutParams): Promise<void>;
    /**
     * Add several items to the end of the Queue.
     *
     * If the Queue is full, this will retry with exponential backoff until the
     * provided `timeoutMs` is reached, or indefinitely if `timeoutMs` is not set.
     * Raises {@link QueueFullError} if the Queue is still full after the timeout.
     */
    putMany(values: any[], params?: QueuePutManyParams): Promise<void>;
    /** Return the number of objects in the Queue. */
    len(params?: QueueLenParams): Promise<number>;
    /** Iterate through items in a Queue without mutation. */
    iterate(params?: QueueIterateParams): AsyncGenerator<any, void, unknown>;
}

/**
 * Represents a memory snapshot of a Sandbox.
 * This is an experimental feature.
 */
declare class SandboxSnapshot {
    readonly snapshotId: string;
    /** @ignore */
    constructor(client: ModalClient, snapshotId: string);
    /**
     * @deprecated Use {@link SandboxSnapshotService#fromId client.sandboxSnapshots.fromId()} instead.
     */
    static fromId(snapshotId: string): Promise<SandboxSnapshot>;
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
declare class SandboxSnapshotService {
    #private;
    constructor(client: ModalClient);
    /**
     * Get a {@link SandboxSnapshot} by ID.
     */
    fromId(snapshotId: string): Promise<SandboxSnapshot>;
}

/** File open modes supported by the filesystem API. */
type SandboxFileMode = "r" | "w" | "a" | "r+" | "w+" | "a+";
/**
 * SandboxFile represents an open file in the {@link Sandbox} filesystem.
 * Provides read/write operations similar to Node.js `fsPromises.FileHandle`.
 */
declare class SandboxFile {
    #private;
    /** @ignore */
    constructor(client: ModalClient, fileDescriptor: string, taskId: string);
    /**
     * Read data from the file.
     * @returns Promise that resolves to the read data as Uint8Array
     */
    read(): Promise<Uint8Array>;
    /**
     * Write data to the file.
     * @param data - Data to write (string or Uint8Array)
     */
    write(data: Uint8Array): Promise<void>;
    /**
     * Flush any buffered data to the file.
     */
    flush(): Promise<void>;
    /**
     * Close the file handle.
     */
    close(): Promise<void>;
}

/**
 * Wrapper around `ReadableStream` with convenience functions.
 *
 * The Stream API is a modern standard for asynchronous data streams across
 * network and process boundaries. It allows you to read data in chunks, pipe
 * and transform it, and handle backpressure.
 *
 * This wrapper adds some extra functions like `.readText()` to read the entire
 * stream as a string, or `readBytes()` to read binary data.
 *
 * Background: https://developer.mozilla.org/en-US/docs/Web/API/Streams_API
 */
interface ModalReadStream<R = any> extends ReadableStream<R> {
    /** Read the entire stream as a string. */
    readText(): Promise<string>;
    /** Read the entire stream as a byte array. */
    readBytes(): Promise<Uint8Array>;
}
/**
 * Wrapper around `WritableStream` with convenience functions.
 *
 * The Stream API is a modern standard for asynchronous data streams across
 * network and process boundaries. It allows you to read data in chunks, pipe
 * and transform it, and handle backpressure.
 *
 * This wrapper adds some extra functions like `.writeText()` to write a string
 * to the stream, or `writeBytes()` to write binary data.
 *
 * Background: https://developer.mozilla.org/en-US/docs/Web/API/Streams_API
 */
interface ModalWriteStream<R = any> extends WritableStream<R> {
    /** Write a string to the stream. Only if this is a text stream. */
    writeText(text: string): Promise<void>;
    /** Write a byte array to the stream. Only if this is a byte stream. */
    writeBytes(bytes: Uint8Array): Promise<void>;
}

/**
 * Stdin is always present, but this option allow you to drop stdout or stderr
 * if you don't need them. The default is "pipe", matching Node.js behavior.
 *
 * If behavior is set to "ignore", the output streams will be empty.
 */
type StdioBehavior = "pipe" | "ignore";
/**
 * Specifies the type of data that will be read from the Sandbox or container
 * process. "text" means the data will be read as UTF-8 text, while "binary"
 * means the data will be read as raw bytes (Uint8Array).
 */
type StreamMode = "text" | "binary";
/** Optional parameters for {@link SandboxService#create client.sandboxes.create()}. */
type SandboxCreateParams = {
    /** Reservation of physical CPU cores for the Sandbox, can be fractional. */
    cpu?: number;
    /** Hard limit of physical CPU cores for the Sandbox, can be fractional. */
    cpuLimit?: number;
    /** Reservation of memory in MiB. */
    memoryMiB?: number;
    /** Hard limit of memory in MiB. */
    memoryLimitMiB?: number;
    /** GPU reservation for the Sandbox (e.g. "A100", "T4:2", "A100-80GB:4"). */
    gpu?: string;
    /** Timeout of the Sandbox container in milliseconds, defaults to 10 minutes. */
    timeoutMs?: number;
    /** The amount of time in milliseconds that a Sandbox can be idle before being terminated. */
    idleTimeoutMs?: number;
    /** Working directory of the Sandbox. */
    workdir?: string;
    /**
     * Sequence of program arguments for the main process.
     * Default behavior is to sleep indefinitely until timeout or termination.
     */
    command?: string[];
    /** Environment variables to set in the Sandbox. */
    env?: Record<string, string>;
    /** {@link Secret}s to inject into the Sandbox as environment variables. */
    secrets?: Secret[];
    /** Mount points for Modal {@link Volume}s. */
    volumes?: Record<string, Volume>;
    /** Mount points for {@link CloudBucketMount}s. */
    cloudBucketMounts?: Record<string, CloudBucketMount>;
    /** Enable a PTY for the Sandbox. */
    pty?: boolean;
    /** List of ports to tunnel into the Sandbox. Encrypted ports are tunneled with TLS. */
    encryptedPorts?: number[];
    /** List of encrypted ports to tunnel into the Sandbox, using HTTP/2. */
    h2Ports?: number[];
    /** List of ports to tunnel into the Sandbox without encryption. */
    unencryptedPorts?: number[];
    /** Whether to block all network access from the Sandbox. */
    blockNetwork?: boolean;
    /** List of CIDRs the Sandbox is allowed to access. If None, all CIDRs are allowed. Cannot be used with blockNetwork. */
    cidrAllowlist?: string[];
    /** Cloud provider to run the Sandbox on. */
    cloud?: string;
    /** Region(s) to run the Sandbox on. */
    regions?: string[];
    /** Enable verbose logging. */
    verbose?: boolean;
    /** Reference to a Modal {@link Proxy} to use in front of this Sandbox. */
    proxy?: Proxy;
    /** Optional name for the Sandbox. Unique within an App. */
    name?: string;
    /** Experimental options for the sandbox. */
    experimentalOptions?: Record<string, boolean>;
    /** Enable memory snapshot support (experimental). */
    experimentalEnableSnapshot?: boolean;
};
/**
 * Service for managing {@link Sandbox}es.
 *
 * Normally only ever accessed via the client as:
 * ```typescript
 * const modal = new ModalClient();
 * const sb = await modal.sandboxes.create(app, image);
 * ```
 */
declare class SandboxService {
    #private;
    constructor(client: ModalClient);
    /**
     * Create a new {@link Sandbox} in the {@link App} with the specified {@link Image} and options.
     */
    create(app: App, image: Image, params?: SandboxCreateParams): Promise<Sandbox>;
    /** Returns a running {@link Sandbox} object from an ID.
     *
     * @returns Sandbox with ID
     */
    fromId(sandboxId: string, params?: SandboxFromIdParams): Promise<Sandbox>;
    /** Get a running {@link Sandbox} by name from a deployed {@link App}.
     *
     * Raises a {@link NotFoundError} if no running Sandbox is found with the given name.
     * A Sandbox's name is the `name` argument passed to {@link SandboxService#create sandboxes.create()}.
     *
     * @param appName - Name of the deployed App
     * @param name - Name of the Sandbox
     * @param params - Optional parameters for getting the Sandbox
     * @returns Promise that resolves to a Sandbox
     */
    fromName(appName: string, name: string, params?: SandboxFromNameParams): Promise<Sandbox>;
    /**
     * Restore a {@link Sandbox} from a {@link SandboxSnapshot} (experimental).
     *
     * @param snapshot - The snapshot to restore from
     * @param params - Optional parameters for restoring the Sandbox
     * @returns Promise that resolves to a Sandbox
     */
    experimentalFromSnapshot(snapshot: SandboxSnapshot, params?: SandboxRestoreParams): Promise<Sandbox>;
    /**
     * List all {@link Sandbox}es for the current Environment or App ID (if specified).
     * If tags are specified, only Sandboxes that have at least those tags are returned.
     */
    list(params?: SandboxListParams): AsyncGenerator<Sandbox, void, unknown>;
}
/** Optional parameters for {@link SandboxService#list client.sandboxes.list()}. */
type SandboxListParams = {
    /** Filter Sandboxes for a specific {@link App}. */
    appId?: string;
    /** Only return Sandboxes that include all specified tags. */
    tags?: Record<string, string>;
    /** Override environment for the request; defaults to current profile. */
    environment?: string;
};
/** Optional parameters for {@link SandboxService#fromId client.sandboxes.fromId()}. */
type SandboxFromIdParams = {
    /** Whether memory snapshots are enabled for this Sandbox (experimental). */
    memorySnapshotsEnabled?: boolean;
};
/** Optional parameters for {@link SandboxService#fromName client.sandboxes.fromName()}. */
type SandboxFromNameParams = {
    environment?: string;
    /** Whether memory snapshots are enabled for this Sandbox (experimental). */
    memorySnapshotsEnabled?: boolean;
};
/** Optional parameters for {@link SandboxService#experimentalFromSnapshot client.sandboxes.experimentalFromSnapshot()}. */
type SandboxRestoreParams = {
    /** Optional sandbox name override. Use null to clear name. */
    name?: string | null;
};
/** Optional parameters for {@link Sandbox#createConnectToken Sandbox.createConnectToken()}. */
type CreateConnectTokenParams = {
    /**
     * Optional user metadata to attach to the token. Must be JSON-serializable.
     * When a request arrives with a valid token, the service receives an
     * `X-Verified-User-Data` header with this data as a JSON-serialized string.
     * Serialized metadata cannot exceed 512 characters.
     */
    userMetadata?: Record<string, unknown>;
};
/**
 * A connect token for a Sandbox.
 *
 * Connect tokens enable authenticated access to services running inside the Sandbox
 * through HTTP and WebSocket requests.
 */
type ConnectToken = {
    /** The URL to connect to the Sandbox service. */
    url: string;
    /** The authentication token. */
    token: string;
};
/** Optional parameters for {@link Sandbox#exec Sandbox.exec()}. */
type SandboxExecParams = {
    /** Specifies text or binary encoding for input and output streams. */
    mode?: StreamMode;
    /** Whether to pipe or ignore standard output. */
    stdout?: StdioBehavior;
    /** Whether to pipe or ignore standard error. */
    stderr?: StdioBehavior;
    /** Working directory to run the command in. */
    workdir?: string;
    /** Timeout for the process in milliseconds. Defaults to 0 (no timeout). */
    timeoutMs?: number;
    /** Environment variables to set for the command. */
    env?: Record<string, string>;
    /** {@link Secret}s to inject as environment variables for the commmand.*/
    secrets?: Secret[];
    /** Enable a PTY for the command. */
    pty?: boolean;
};
/** A port forwarded from within a running Modal {@link Sandbox}. */
declare class Tunnel {
    host: string;
    port: number;
    unencryptedHost?: string | undefined;
    unencryptedPort?: number | undefined;
    /** @ignore */
    constructor(host: string, port: number, unencryptedHost?: string | undefined, unencryptedPort?: number | undefined);
    /** Get the public HTTPS URL of the forwarded port. */
    get url(): string;
    /** Get the public TLS socket as a [host, port] tuple. */
    get tlsSocket(): [string, number];
    /** Get the public TCP socket as a [host, port] tuple. */
    get tcpSocket(): [string, number];
}
type SandboxConstructorOptions = {
    memorySnapshotsEnabled?: boolean;
};
/** Sandboxes are secure, isolated containers in Modal that boot in seconds. */
declare class Sandbox {
    #private;
    readonly sandboxId: string;
    stdin: ModalWriteStream<string>;
    stdout: ModalReadStream<string>;
    stderr: ModalReadStream<string>;
    /** @ignore */
    constructor(client: ModalClient, sandboxId: string, options?: SandboxConstructorOptions);
    /** Set tags (key-value pairs) on the Sandbox. Tags can be used to filter results in {@link SandboxService#list Sandbox.list}. */
    setTags(tags: Record<string, string>): Promise<void>;
    /** Get tags (key-value pairs) currently attached to this Sandbox from the server. */
    getTags(): Promise<Record<string, string>>;
    /**
     * @deprecated Use {@link SandboxService#fromId client.sandboxes.fromId()} instead.
     */
    static fromId(sandboxId: string): Promise<Sandbox>;
    /**
     * @deprecated Use {@link SandboxService#fromName client.sandboxes.fromName()} instead.
     */
    static fromName(appName: string, name: string, environment?: string): Promise<Sandbox>;
    /**
     * Open a file in the Sandbox filesystem.
     * @param path - Path to the file to open
     * @param mode - File open mode (r, w, a, r+, w+, a+)
     * @returns Promise that resolves to a {@link SandboxFile}
     */
    open(path: string, mode?: SandboxFileMode): Promise<SandboxFile>;
    exec(command: string[], params?: SandboxExecParams & {
        mode?: "text";
    }): Promise<ContainerProcess<string>>;
    exec(command: string[], params: SandboxExecParams & {
        mode: "binary";
    }): Promise<ContainerProcess<Uint8Array>>;
    terminate(): Promise<void>;
    wait(): Promise<number>;
    /** Get {@link Tunnel} metadata for the Sandbox.
     *
     * Raises {@link SandboxTimeoutError} if the tunnels are not available after the timeout.
     *
     * @returns A dictionary of {@link Tunnel} objects which are keyed by the container port.
     */
    tunnels(timeoutMs?: number): Promise<Record<number, Tunnel>>;
    /**
     * Snapshot the filesystem of the Sandbox.
     *
     * Returns an {@link Image} object which can be used to spawn a new Sandbox with the same filesystem.
     *
     * @param timeoutMs - Timeout for the snapshot operation in milliseconds
     * @returns Promise that resolves to an {@link Image}
     */
    snapshotFilesystem(timeoutMs?: number): Promise<Image>;
    /**
     * Take a memory snapshot of the Sandbox (experimental).
     *
     * Returns a {@link SandboxSnapshot} object which can be used to restore a new Sandbox.
     *
     * @returns Promise that resolves to a {@link SandboxSnapshot}
     */
    experimentalSnapshot(): Promise<SandboxSnapshot>;
    /**
     * Check if the Sandbox has finished running.
     *
     * Returns `null` if the Sandbox is still running, else returns the exit code.
     */
    poll(): Promise<number | null>;
    /**
     * Create a connect token for this Sandbox.
     *
     * Connect tokens enable authenticated access to services running inside the Sandbox
     * through HTTP and WebSocket requests. The token can be transmitted via:
     * - Authorization header: `Authorization: Bearer {token}`
     * - Query parameter: `_modal_connect_token` in the URL
     * - Cookie: `_modal_connect_token` as a cookie
     *
     * The service inside the container must listen on port 8080.
     *
     * @param params - Optional parameters for the connect token
     * @returns Promise that resolves to a {@link ConnectToken}
     */
    createConnectToken(params?: CreateConnectTokenParams): Promise<ConnectToken>;
    /**
     * @deprecated Use {@link SandboxService#list client.sandboxes.list()} instead.
     */
    static list(params?: SandboxListParams): AsyncGenerator<Sandbox, void, unknown>;
}
declare class ContainerProcess<R extends string | Uint8Array = any> {
    #private;
    stdin: ModalWriteStream<R>;
    stdout: ModalReadStream<R>;
    stderr: ModalReadStream<R>;
    returncode: number | null;
    constructor(client: ModalClient, execId: string, params?: SandboxExecParams);
    /** Wait for process completion and return the exit code. */
    wait(): Promise<number>;
}

/** Resolved configuration object from `Config` and environment variables. */
interface Profile {
    serverUrl: string;
    tokenId?: string;
    tokenSecret?: string;
    environment?: string;
    imageBuilderVersion?: string;
    logLevel?: string;
}

type LogLevel = "debug" | "info" | "warn" | "error";
interface Logger {
    debug(message: string, ...args: any[]): void;
    info(message: string, ...args: any[]): void;
    warn(message: string, ...args: any[]): void;
    error(message: string, ...args: any[]): void;
}

interface ModalClientParams {
    tokenId?: string;
    tokenSecret?: string;
    environment?: string;
    endpoint?: string;
    timeoutMs?: number;
    maxRetries?: number;
    logger?: Logger;
    logLevel?: LogLevel;
    /**
     * Custom gRPC middleware to be applied to all API calls.
     * These middleware are appended after Modal's built-in middleware
     * (authentication, retry logic, and timeouts), allowing you to add
     * telemetry, tracing, or other observability features.
     *
     * Note that the Modal gRPC API is not considered a public API, and
     * can change without warning.
     */
    grpcMiddleware?: ClientMiddleware[];
    /** @ignore */
    cpClient?: ModalGrpcClient;
}
type ModalGrpcClient = Client<typeof ModalClientDefinition, TimeoutOptions & RetryOptions>;
/**
 * The main client for interacting with Modal's cloud infrastructure.
 *
 * ModalClient provides access to all Modal services through service properties.
 * Create a client instance and use its service properties to manage {@link App}s,
 * {@link Function_ Function}s, * {@link Sandbox}es, and other Modal resources.
 *
 * @example
 * ```typescript
 * import { ModalClient } from "modal";
 *
 * const modal = new ModalClient();
 *
 * const app = await modal.apps.fromName("my-app");
 * const image = modal.images.fromRegistry("python:3.13");
 * const sb = await modal.sandboxes.create(app, image);
 * ```
 */
declare class ModalClient {
    readonly apps: AppService;
    readonly cloudBucketMounts: CloudBucketMountService;
    readonly cls: ClsService;
    readonly functions: FunctionService;
    readonly functionCalls: FunctionCallService;
    readonly images: ImageService;
    readonly proxies: ProxyService;
    readonly queues: QueueService;
    readonly sandboxes: SandboxService;
    readonly sandboxSnapshots: SandboxSnapshotService;
    readonly secrets: SecretService;
    readonly volumes: VolumeService;
    /** @ignore */
    readonly cpClient: ModalGrpcClient;
    readonly profile: Profile;
    readonly logger: Logger;
    private ipClients;
    private authTokenManager;
    private customMiddleware;
    constructor(params?: ModalClientParams);
    environmentName(environment?: string): string;
    imageBuilderVersion(version?: string): string;
    /** @ignore */
    ipClient(serverUrl: string): ModalGrpcClient;
    close(): void;
    version(): string;
    private createClient;
    /** Middleware to retry transient errors and timeouts for unary requests. */
    private retryMiddleware;
    private authMiddleware;
}
type TimeoutOptions = {
    /** Timeout for this call, interpreted as a duration in milliseconds */
    timeoutMs?: number;
};
type RetryOptions = {
    /** Number of retries to take. */
    retries?: number;
    /** Base delay in milliseconds. */
    baseDelay?: number;
    /** Maximum delay in milliseconds. */
    maxDelay?: number;
    /** Exponential factor to multiply successive delays. */
    delayFactor?: number;
    /** Additional status codes to retry. */
    additionalStatusCodes?: Status[];
};
/**
 * @deprecated Use {@link ModalClient `new ModalClient()`} instead.
 */
type ClientOptions = {
    tokenId: string;
    tokenSecret: string;
    environment?: string;
};
/**
 * @deprecated Use {@link ModalClient `new ModalClient()`} instead.
 */
declare function initializeClient(options: ClientOptions): void;
/**
 * Stops the auth token refresh.
 * @deprecated Use {@link ModalClient#close modalClient.close()} instead.
 */
declare function close(): void;

/**
 * Service for managing {@link App}s.
 *
 * Normally only ever accessed via the client as:
 * ```typescript
 * const modal = new ModalClient();
 * const app = await modal.apps.fromName("my-app");
 * ```
 */
declare class AppService {
    #private;
    constructor(client: ModalClient);
    /**
     * Reference a deployed {@link App} by name, or create if it does not exist.
     */
    fromName(name: string, params?: AppFromNameParams): Promise<App>;
}
/** Optional parameters for {@link AppService#fromName client.apps.fromName()}. */
type AppFromNameParams = {
    environment?: string;
    createIfMissing?: boolean;
};
/** @deprecated Use specific Params types instead. */
type LookupOptions = {
    environment?: string;
    createIfMissing?: boolean;
};
/** @deprecated Use specific Params types instead. */
type DeleteOptions = {
    environment?: string;
};
/** @deprecated Use specific Params types instead. */
type EphemeralOptions = {
    environment?: string;
};
/** Represents a deployed Modal App. */
declare class App {
    readonly appId: string;
    readonly name?: string;
    /** @ignore */
    constructor(appId: string, name?: string);
    /**
     * @deprecated Use {@link AppService#fromName client.apps.fromName()} instead.
     */
    static lookup(name: string, options?: LookupOptions): Promise<App>;
    /**
     * @deprecated Use {@link SandboxService#create client.sandboxes.create()} instead.
     */
    createSandbox(image: Image, options?: SandboxCreateParams): Promise<Sandbox>;
    /**
     * @deprecated Use {@link ImageService#fromRegistry client.images.fromRegistry()} instead.
     */
    imageFromRegistry(tag: string, secret?: Secret): Promise<Image>;
    /**
     * @deprecated Use {@link ImageService#fromAwsEcr client.images.fromAwsEcr()} instead.
     */
    imageFromAwsEcr(tag: string, secret: Secret): Promise<Image>;
    /**
     * @deprecated Use {@link ImageService#fromGcpArtifactRegistry client.images.fromGcpArtifactRegistry()} instead.
     */
    imageFromGcpArtifactRegistry(tag: string, secret: Secret): Promise<Image>;
}

/** Function execution exceeds the allowed time limit. */
declare class FunctionTimeoutError extends Error {
    constructor(message: string);
}
/** An error on the Modal server, or a Python exception. */
declare class RemoteError extends Error {
    constructor(message: string);
}
/** A retryable internal error from Modal. */
declare class InternalFailure extends Error {
    constructor(message: string);
}
/** Some resource was not found. */
declare class NotFoundError extends Error {
    constructor(message: string);
}
/** A resource already exists. */
declare class AlreadyExistsError extends Error {
    constructor(message: string);
}
/** A request or other operation was invalid. */
declare class InvalidError extends Error {
    constructor(message: string);
}
/** The Queue is empty. */
declare class QueueEmptyError extends Error {
    constructor(message: string);
}
/** The Queue is full. */
declare class QueueFullError extends Error {
    constructor(message: string);
}
/** Sandbox operations that exceed the allowed time limit. */
declare class SandboxTimeoutError extends Error {
    constructor(message?: string);
}

declare function checkForRenamedParams(params: any, renames: Record<string, string>): void;

export { AlreadyExistsError, App, type AppFromNameParams, AppService, type ClientOptions, CloudBucketMount, CloudBucketMountService, Cls, type ClsFromNameParams, ClsInstance, ClsService, type ClsWithBatchingParams, type ClsWithConcurrencyParams, type ClsWithOptionsParams, type ConnectToken, ContainerProcess, type CreateConnectTokenParams, type DeleteOptions, type EphemeralOptions, FunctionCall, type FunctionCallCancelParams, type FunctionCallGetParams, FunctionCallService, type FunctionFromNameParams, FunctionService, type FunctionStats, FunctionTimeoutError, type FunctionUpdateAutoscalerParams, Function_, Image, type ImageDeleteParams, type ImageDockerfileCommandsParams, ImageService, InternalFailure, InvalidError, type LogLevel, type Logger, type LookupOptions, ModalClient, type ModalClientParams, type ModalReadStream, type ModalWriteStream, NotFoundError, type Profile, Proxy, type ProxyFromNameParams, ProxyService, Queue, type QueueClearParams, type QueueDeleteParams, QueueEmptyError, type QueueEphemeralParams, type QueueFromNameParams, QueueFullError, type QueueGetParams, type QueueIterateParams, type QueueLenParams, type QueuePutParams, QueueService, RemoteError, Retries, Sandbox, type SandboxCreateParams, type SandboxExecParams, SandboxFile, type SandboxFileMode, type SandboxFromIdParams, type SandboxFromNameParams, type SandboxListParams, type SandboxRestoreParams, SandboxService, SandboxSnapshot, SandboxSnapshotService, SandboxTimeoutError, Secret, type SecretDeleteParams, type SecretFromNameParams, type SecretFromObjectParams, SecretService, type StdioBehavior, type StreamMode, Tunnel, Volume, type VolumeDeleteParams, type VolumeEphemeralParams, type VolumeFromNameParams, VolumeService, checkForRenamedParams, close, initializeClient };
