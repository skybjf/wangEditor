/**
 * @description 注册 module
 * @author wangfupeng
 */

import Boot from '../Boot'
import { IModuleConf } from '@wangeditor/core'

function registerModule(module: Partial<IModuleConf>) {
  const { menus, renderElems, renderStyle, elemsToHtml, textStyleToHtml, editorPlugin } = module

  if (menus) {
    menus.forEach(menu => Boot.registerMenu(menu))
  }
  if (renderElems) {
    renderElems.forEach(renderElemConf => Boot.registerRenderElem(renderElemConf))
  }
  if (renderStyle) {
    Boot.registerRenderStyle(renderStyle)
  }
  if (elemsToHtml) {
    elemsToHtml.forEach(elemToHtmlConf => Boot.registerElemToHtml(elemToHtmlConf))
  }
  if (textStyleToHtml) {
    Boot.registerTextStyleToHtml(textStyleToHtml)
  }
  if (editorPlugin) {
    Boot.registerPlugin(editorPlugin)
  }
}

export default registerModule
