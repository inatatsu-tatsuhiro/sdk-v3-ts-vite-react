import { TransactionType } from "../symbol/src/symbol/models"

export const transactionTypeConverter = (transactionType: TransactionType, version = 1) => {
  switch (transactionType.value) {
    case 16716: return `account_key_link_transaction_v${version}`
    case 16972: return `node_key_link_transaction_v${version}`
    case 16705: return `aggregate_complete_transaction_v${version}`
    case 16961: return `aggregate_bonded_transaction_v${version}`
    case 16707: return `voting_key_link_transaction_v${version}`
    case 16963: return `vrf_key_link_transaction_v${version}`
    case 16712: return `hash_lock_transaction_v${version}`
    case 16722: return `secret_lock_transaction_v${version}`
    case 16978: return `secret_proof_transaction_v${version}`
    case 16708: return `account_metadata_transaction_v${version}`
    case 16964: return `mosaic_metadata_transaction_v${version}`
    case 17220: return `namespace_metadata_transaction_v${version}`
    case 16717: return `mosaic_definition_transaction_v${version}`
    case 16973: return `mosaic_supply_change_transaction_v${version}`
    case 17229: return `mosaic_supply_revocation_transaction_v${version}`
    case 16725: return `multisig_account_modification_transaction_v${version}`
    case 16974: return `address_alias_transaction_v${version}`
    case 17230: return `mosaic_alias_transaction_v${version}`
    case 16718: return `namespace_registration_transaction_v${version}`
    case 16720: return `account_address_restriction_transaction_v${version}`
    case 16976: return `account_mosaic_restriction_transaction_v${version}`
    case 17232: return `account_operation_restriction_transaction_v${version}`
    case 16977: return `mosaic_address_restriction_transaction_v${version}`
    case 16721: return `mosaic_global_restriction_transaction_v${version}`
    case 16724: return `transfer_transaction_v${version}`
  }
}