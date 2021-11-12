import { getTransactionDetails, TransactionDetails } from '@gnosis.pm/safe-react-gateway-sdk'

import { getNetworkId } from 'src/config'
import { CONFIG_SERVICE_URL } from 'src/utils/constants'

/**
 * @param {string} clientGatewayTxId safeTxHash or transaction id from client-gateway
 */
export const fetchSafeTransaction = async (clientGatewayTxId: string): Promise<TransactionDetails> => {
  return getTransactionDetails(CONFIG_SERVICE_URL, getNetworkId(), clientGatewayTxId)
}
