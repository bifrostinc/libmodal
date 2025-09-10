# Niteshift Migration Guide for libmodal v0.3.21

This guide helps you update your Niteshift codebase to use the updated libmodal fork synced with v0.3.21.

## Breaking Changes

### 1. SandboxFromId Function Changed to Static Method

The `SandboxFromId` function has been replaced with a static method `Sandbox.fromId()`.

**Before (libmodal v0.3.15 fork):**
```javascript
import { SandboxFromId } from 'modal';

const sandbox = await SandboxFromId(sandboxId);
```

**After (libmodal v0.3.21 fork):**
```javascript
import { Sandbox } from 'modal';

const sandbox = await Sandbox.fromId(sandboxId);
```

## Package.json Update

Update your package.json to point to the new branch:

**Before:**
```json
{
  "dependencies": {
    "modal": "github:bifrostinc/libmodal#conor.branagan/sync-upstream-v0-3-21"
  }
}
```

**After:**
```json
{
  "dependencies": {
    "modal": "github:bifrostinc/libmodal#niteshift-v0.3.21"
  }
}
```

## New Features Available

With the v0.3.21 update, you now have access to many new features:

### Named Sandboxes
```javascript
// Create a named sandbox
const sandbox = await app.createSandbox(image, {
  name: "my-sandbox",
  // ... other options
});

// Later retrieve it by name
const sameSandbox = await Sandbox.fromName("my-app", "my-sandbox");
```

### Sandbox Tagging and Listing
```javascript
// Set tags on a sandbox
await sandbox.setTags({
  environment: "production",
  team: "backend"
});

// List sandboxes with specific tags
for await (const sandbox of Sandbox.list({ 
  tags: { environment: "production" } 
})) {
  console.log(sandbox.sandboxId);
}
```

### Ephemeral Volumes
```javascript
import { Volume } from 'modal';

// Create ephemeral volume
const volume = await Volume.createEphemeral();

// Mount to sandbox
const sandbox = await app.createSandbox(image, {
  volumes: { "/data": volume }
});
```

### Cloud Bucket Mounts
```javascript
import { CloudBucketMount } from 'modal';

const mount = new CloudBucketMount({
  bucketName: "my-bucket",
  provider: "aws",
  region: "us-west-2"
});

const sandbox = await app.createSandbox(image, {
  cloudBucketMounts: { "/bucket": mount }
});
```

### Proxy Support
```javascript
import { Proxy } from 'modal';

const proxy = await Proxy.lookup("my-proxy");
const sandbox = await app.createSandbox(image, {
  proxy: proxy
});
```

### Idle Timeout
```javascript
const sandbox = await app.createSandbox(image, {
  idleTimeout: 60000, // 60 seconds
  // ... other options
});
```

## Features Preserved

The following Niteshift-specific features are still available:

### experimentalOptions
```javascript
const sandbox = await app.createSandbox(image, {
  experimentalOptions: {
    enableFeatureX: true,
    enableFeatureY: false
  }
});
```

### JSON.stringify for Sandbox Errors
Sandbox completion errors now properly stringify complex result objects for better debugging.

## Testing Your Migration

1. Update your package.json to use the new branch
2. Run `npm install` or `pnpm install` to update dependencies
3. Search your codebase for `SandboxFromId` and replace with `Sandbox.fromId`
4. Run your test suite to ensure everything works
5. Consider adopting new features like named sandboxes or tagging for better sandbox management

## No Lost Functionality

All previous functionality has been preserved. The only breaking change is the `SandboxFromId` to `Sandbox.fromId` migration, which is a simple find-and-replace operation.

## Support

If you encounter any issues during migration, please create an issue in the bifrostinc/libmodal repository.