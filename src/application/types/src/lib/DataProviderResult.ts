import { ProviderErrorReason } from '../../../shared/problem/src'
import { StaticText } from '../../../shared/types/src'

export interface DataProviderResult {
  data?: object | string | boolean | number
  date: Date
  reason?: ProviderErrorReason[] | ProviderErrorReason | StaticText
  status: 'failure' | 'success'
  statusCode?: number
}

export interface FailedDataProviderResult extends DataProviderResult {
  reason?: ProviderErrorReason[] | ProviderErrorReason | StaticText
  status: 'failure'
}

export interface SuccessfulDataProviderResult extends DataProviderResult {
  status: 'success'
}
