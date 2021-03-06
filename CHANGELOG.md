# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="4.0.3"></a>
## [4.0.3](https://github.com/SuperFlyTV/casparcg-connection/compare/v4.0.2...v4.0.3) (2018-05-07)



<a name="4.0.2"></a>
## [4.0.2](https://github.com/SuperFlyTV/casparcg-connection/compare/v4.0.1...v4.0.2) (2018-05-04)



<a name="4.0.1"></a>
## [4.0.1](https://github.com/SuperFlyTV/casparcg-connection/compare/v3.0.1...v4.0.1) (2018-04-29)


### Bug Fixes

* **TemplateData):** PR from Craig Sweaton escaping \r\n from template data. Prevents breaking the AMCP communication. 


<a name="4.0.0"></a>
# [4.0.0](https://github.com/SuperFlyTV/casparcg-connection/compare/v3.1.0...v4.0.0) (2018-04-10)


### Features

* **Asynchronous commands:** refactor the internal command execution ([7b10d43](https://github.com/SuperFlyTV/casparcg-connection/commit/7b10d43))
* **QueueMode:** allow runtime configuration ([f39f7ea](https://github.com/SuperFlyTV/casparcg-connection/commit/f39f7ea))
* **Scheduled Commands:** keep sequential mode for compatibility ([48a760f](https://github.com/SuperFlyTV/casparcg-connection/commit/48a760f))
* **Scheduled Commands:** schedule and resolve scheduled commands ([5a9f0fb](https://github.com/SuperFlyTV/casparcg-connection/commit/5a9f0fb))


* . ([7a8d4c6](https://github.com/SuperFlyTV/casparcg-connection/commit/7a8d4c6))


### BREAKING CHANGES

* set default queue mode to SALVO, making the library fully asynchronous.



<a name="3.1.0"></a>
# [3.1.0](https://github.com/SuperFlyTV/casparcg-connection/compare/v3.0.2...v3.1.0) (2018-03-28)


### Features

* **Add/Remove Commands:** Merge branch 'Besedin86/master' into develop ([ca772e6](https://github.com/SuperFlyTV/casparcg-connection/commit/ca772e6))



<a name="3.0.2"></a>
## [3.0.2](https://github.com/SuperFlyTV/casparcg-connection/compare/v3.0.1...v3.0.2) (2018-03-27)


### Bug Fixes

* **CGAddCommand:** playOnLoad is required ([3fc9300](https://github.com/SuperFlyTV/casparcg-connection/commit/3fc9300)), closes [#93](https://github.com/SuperFlyTV/casparcg-connection/issues/93)



<a name="3.0.1"></a>
## [3.0.1](https://github.com/SuperFlyTV/casparcg-connection/compare/v3.0.0...v3.0.1) (2017-10-22)


### Bug Fixes

* **MixerCommands:** Corrected copy/paste errors for several mixer commands, related to transitions. ([29bc5a5](https://github.com/SuperFlyTV/casparcg-connection/commit/29bc5a5)), closes [#89](https://github.com/SuperFlyTV/casparcg-connection/issues/89)



<a name="3.0.0"></a>
# [3.0.0](https://github.com/SuperFlyTV/casparcg-connection/compare/v3.0.0-next.4...v3.0.0) (2017-10-16)


### Bug Fixes

* **TemplateData:** Correct double escaping of quotes xml strings ([5bda229](https://github.com/SuperFlyTV/casparcg-connection/commit/5bda229))



<a name="3.0.0-next.4"></a>
# [3.0.0-next.4](https://github.com/SuperFlyTV/casparcg-connection/compare/v3.0.0-next.3...v3.0.0-next.4) (2017-10-03)


### Bug Fixes

* **Config:** Correct cross-version-import between configVOs ([bdcedfd](https://github.com/SuperFlyTV/casparcg-connection/commit/bdcedfd))
* **onConnection:** Bug with promise resolve and queue conducting on initial connection ([4504cb9](https://github.com/SuperFlyTV/casparcg-connection/commit/4504cb9))



<a name="3.0.0-next.3"></a>
# [3.0.0-next.3](https://github.com/SuperFlyTV/casparcg-connection/compare/v3.0.0-next.2...v3.0.0-next.3) (2017-07-31)


### Bug Fixes

* **Socket:** Fixed bug with disposing socket clients before they are created ([7a0a510](https://github.com/SuperFlyTV/casparcg-connection/commit/7a0a510))



<a name="3.0.0-next.2"></a>
# [3.0.0-next.2](https://github.com/SuperFlyTV/casparcg-connection/compare/3.0.0-next.1...v3.0.0-next.2) (2017-07-24)



<a name="3.0.0-next.1"></a>
# [3.0.0-next.1](https://github.com/SuperFlyTV/casparcg-connection/compare/v3.0.0-next.0...v3.0.0-next.1) (2017-07-20)


### Features

* **VirginServer:** Report server's virgin-state on connected events ([a8f3b61](https://github.com/SuperFlyTV/casparcg-connection/commit/a8f3b61))



<a name="3.0.0-next.0"></a>
# [3.0.0-next.0](https://github.com/SuperFlyTV/casparcg-connection/compare/v2.1.0...v3.0.0-next.0) (2017-07-20)


### Bug Fixes

* **Command:** Critical error with command timeouts ([6caeacb](https://github.com/SuperFlyTV/casparcg-connection/commit/6caeacb))
* **Config:** Bugfix with manual operations parsing config XML ([e80117b](https://github.com/SuperFlyTV/casparcg-connection/commit/e80117b))
* **Events:** Critical bug introduced in v1.0.0 ([7dcd9fe](https://github.com/SuperFlyTV/casparcg-connection/commit/7dcd9fe))
* **Logging:** Better handling of errors ([d80c794](https://github.com/SuperFlyTV/casparcg-connection/commit/d80c794))
* **Socket:** Prevents timeout of extremely long responses ([613c629](https://github.com/SuperFlyTV/casparcg-connection/commit/613c629))
* **Socket:** Removed unused internal event ([5eb343c](https://github.com/SuperFlyTV/casparcg-connection/commit/5eb343c))
* **Version:** bugfix for setting manuel ServerVersion ([8362a22](https://github.com/SuperFlyTV/casparcg-connection/commit/8362a22))


### Code Refactoring

* **Enum:** Changed the public enum ServerVersion ([b7aadea](https://github.com/SuperFlyTV/casparcg-connection/commit/b7aadea))


### Features

* **Command:** Planned for better timeout retry strategy ([b0b5f19](https://github.com/SuperFlyTV/casparcg-connection/commit/b0b5f19))
* **Config:** Added members "vo" and "xml" as aliases to "VO" and "XML" on Config objects ([65dffde](https://github.com/SuperFlyTV/casparcg-connection/commit/65dffde))
* **Queue:** Added prioritized queues ([929e4ad](https://github.com/SuperFlyTV/casparcg-connection/commit/929e4ad)), closes [#15](https://github.com/SuperFlyTV/casparcg-connection/issues/15)
* **Version:** Added version promise to CasparCG ([554ea41](https://github.com/SuperFlyTV/casparcg-connection/commit/554ea41)), closes [#73](https://github.com/SuperFlyTV/casparcg-connection/issues/73)


### BREAKING CHANGES

* **Enum:** enum ServerVersion is now CasparCGVersion, for consistency.



<a name="2.1.0"></a>
# [2.1.0](https://github.com/SuperFlyTV/casparcg-connection/compare/v2.0.3...v2.1.0) (2017-07-18)


### Bug Fixes

* CasparCG Connection events ([a825a18](https://github.com/SuperFlyTV/casparcg-connection/commit/a825a18))


### Features

* **Commands:** Better command timeout strategy ([bd51c31](https://github.com/SuperFlyTV/casparcg-connection/commit/bd51c31))
* **Socket:** (Re)connection strategy ([3d04e5f](https://github.com/SuperFlyTV/casparcg-connection/commit/3d04e5f)), closes [#66](https://github.com/SuperFlyTV/casparcg-connection/issues/66)
* **Socket:** Reconnection ([90ca334](https://github.com/SuperFlyTV/casparcg-connection/commit/90ca334))



<a name="2.0.3"></a>
## [2.0.3](https://github.com/SuperFlyTV/casparcg-connection/compare/v2.0.2...v2.0.3) (2017-07-12)


### Bug Fixes

* events ([1288f34](https://github.com/SuperFlyTV/casparcg-connection/commit/1288f34))



<a name="2.0.2"></a>
## [2.0.2](https://github.com/SuperFlyTV/casparcg-connection/compare/v2.0.1...v2.0.2) (2017-07-12)



<a name="2.0.1"></a>
## [2.0.1](https://github.com/SuperFlyTV/casparcg-connection/compare/v2.0.0...v2.0.1) (2017-07-12)



<a name="2.0.0"></a>
# [2.0.0](https://github.com/SuperFlyTV/casparcg-connection/compare/v1.0.0...v2.0.0) (2017-07-12)


### Bug Fixes

* ES5 target ([f41b04f](https://github.com/SuperFlyTV/casparcg-connection/commit/f41b04f))


### BREAKING CHANGES

* Reverted ES6 target back to ES5 due to Meteor compability



<a name="1.0.0"></a>
# [1.0.0](https://github.com/SuperFlyTV/casparcg-connection/compare/v0.17.2...v1.0.0) (2017-07-12)


### build

* ES6 target ([41b1292](https://github.com/SuperFlyTV/casparcg-connection/commit/41b1292))


### Features

* SocketState changed ([e1fdd5b](https://github.com/SuperFlyTV/casparcg-connection/commit/e1fdd5b))


### BREAKING CHANGES

* build target ES2015 (ES6). This required Node.js version 6.4.0 or higher to fully function.



<a name="0.17.2"></a>
## [0.17.2](https://github.com/SuperFlyTV/casparcg-connection/compare/v0.17.1...v0.17.2) (2017-06-18)


### Bug Fixes

* typo ([5214ead](https://github.com/SuperFlyTV/casparcg-connection/commit/5214ead))
