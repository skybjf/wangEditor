/**
 * @description table element
 * @author wangfupeng
 */

import { Text } from 'slate'

//【注意】需要把自定义的 Element 引入到最外层的 custom-types.d.ts

export type TableCellElement = {
  type: 'table-cell'
  colSpan?: number
  rowSpan?: number
  children: Text[]
}

export type TableRowElement = {
  type: 'table-row'
  children: TableCellElement[]
}

export type TableElement = {
  type: 'table'
  withHeader?: boolean // 是否显示表头
  fullWidth?: boolean // 是否宽度 100%
  children: TableRowElement[]
}
