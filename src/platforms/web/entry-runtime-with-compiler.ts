import Vue from './runtime-with-compiler'
import * as vca from 'v3'
import { extend } from 'shared/util'
console.log('platforms/web/entry-runtime-with-compiler.ts')
extend(Vue, vca)

import { effect } from 'v3/reactivity/effect'
Vue.effect = effect

export default Vue
