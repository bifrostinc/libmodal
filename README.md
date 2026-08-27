# Modal SDKs for JavaScript/TypeScript and Go

[![Build Status](https://github.com/modal-labs/libmodal/actions/workflows/ci.yaml/badge.svg?branch=main)](https://github.com/modal-labs/libmodal/actions?query=branch%3Amain)
[![JS Reference Documentation](https://img.shields.io/static/v1?message=reference&logo=javascript&labelColor=5c5c5c&color=1182c3&logoColor=white&label=%20)](https://modal-labs.github.io/libmodal/)
[![JS npm Version](https://img.shields.io/npm/v/modal.svg)](https://www.npmjs.org/package/modal)
[![JS npm Downloads](https://img.shields.io/npm/dm/modal.svg)](https://www.npmjs.com/package/modal)
[![Go Reference Documentation](https://pkg.go.dev/badge/github.com/modal-labs/libmodal/modal-go)](https://pkg.go.dev/github.com/modal-labs/libmodal/modal-go)

This repo hosts the [Modal](https://modal.com) SDKs for JavaScript/TypeScript and Go. They provide convenient, on-demand access to serverless cloud compute on Modal from JS/TS and golang projects. Use it to safely run arbitrary code in Modal Sandboxes, call Modal Functions, and interact with Modal resources. For Python, see the main [Modal Python SDK](https://github.com/modal-labs/modal-client) instead.

For more details, documentation and installation instructions, see the README for each SDK:
- **[JavaScript / TypeScript](./modal-js/README.md)**
- **[Go](./modal-go/README.md)**

## Contributing

Clone the repo with submodules, then see [DEVELOPING.md](./DEVELOPING.md) for setup and development details.

Tests run against Modal cloud infrastructure, so you need to be authenticated with Modal, and the test apps and secrets from [`test-support/`](./test-support) must be deployed first:

```bash
test-support/setup.sh
```

Then run the tests for each SDK:

```bash
# JavaScript / TypeScript
cd modal-js && npm install && npm run build && npm test

# Go
cd modal-go && go test -v -count=1 -parallel=10 ./...
```

Lint the code the same way CI does:

```bash
# JavaScript / TypeScript
cd modal-js && npm run lint

# Go
cd modal-go && golangci-lint run
```

## Support

For usage questions and other support, please reach out on the [Modal Community Slack](https://modal.com/slack).

## Community SDKs

There are also open-source Modal libraries built and maintained by our community. These projects are not officially supported by Modal and we thus can't vouch for them, but feel free to explore and contribute.

- Ruby: [anthonycorletti/modal-rb](https://github.com/anthonycorletti/modal-rb)
