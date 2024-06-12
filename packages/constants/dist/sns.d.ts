export declare enum SnsSwapLifecycle {
  Unspecified = 0,
  Pending = 1,
  Open = 2,
  Committed = 3,
  Aborted = 4,
  Adopted = 5,
}
export declare enum Vote {
  Unspecified = 0,
  Yes = 1,
  No = 2,
}
export declare enum SnsProposalDecisionStatus {
  PROPOSAL_DECISION_STATUS_UNSPECIFIED = 0,
  PROPOSAL_DECISION_STATUS_OPEN = 1,
  PROPOSAL_DECISION_STATUS_REJECTED = 2,
  PROPOSAL_DECISION_STATUS_ADOPTED = 3,
  PROPOSAL_DECISION_STATUS_EXECUTED = 4,
  PROPOSAL_DECISION_STATUS_FAILED = 5,
}
export declare enum SnsNeuronPermissionType {
  NEURON_PERMISSION_TYPE_UNSPECIFIED = 0,
  NEURON_PERMISSION_TYPE_CONFIGURE_DISSOLVE_STATE = 1,
  NEURON_PERMISSION_TYPE_MANAGE_PRINCIPALS = 2,
  NEURON_PERMISSION_TYPE_SUBMIT_PROPOSAL = 3,
  NEURON_PERMISSION_TYPE_VOTE = 4,
  NEURON_PERMISSION_TYPE_DISBURSE = 5,
  NEURON_PERMISSION_TYPE_SPLIT = 6,
  /**
   * @deprecated
   */
  NEURON_PERMISSION_TYPE_MERGE_MATURITY = 7,
  NEURON_PERMISSION_TYPE_DISBURSE_MATURITY = 8,
  NEURON_PERMISSION_TYPE_STAKE_MATURITY = 9,
  NEURON_PERMISSION_TYPE_MANAGE_VOTING_PERMISSION = 10,
}
export declare const SnsNeuronPermissions: SnsNeuronPermissionType[];
export declare const HotKeysPermissions: SnsNeuronPermissionType[];
// # sourceMappingURL=sns.d.ts.map
