export var SnsSwapLifecycle;
(function (SnsSwapLifecycle) {
    SnsSwapLifecycle[SnsSwapLifecycle.Unspecified = 0] = "Unspecified";
    SnsSwapLifecycle[SnsSwapLifecycle.Pending = 1] = "Pending";
    SnsSwapLifecycle[SnsSwapLifecycle.Open = 2] = "Open";
    SnsSwapLifecycle[SnsSwapLifecycle.Committed = 3] = "Committed";
    SnsSwapLifecycle[SnsSwapLifecycle.Aborted = 4] = "Aborted";
    SnsSwapLifecycle[SnsSwapLifecycle.Adopted = 5] = "Adopted";
})(SnsSwapLifecycle || (SnsSwapLifecycle = {}));
export var Vote;
(function (Vote) {
    Vote[Vote.Unspecified = 0] = "Unspecified";
    Vote[Vote.Yes = 1] = "Yes";
    Vote[Vote.No = 2] = "No";
})(Vote || (Vote = {}));
export var SnsProposalDecisionStatus;
(function (SnsProposalDecisionStatus) {
    SnsProposalDecisionStatus[SnsProposalDecisionStatus.PROPOSAL_DECISION_STATUS_UNSPECIFIED = 0] = "PROPOSAL_DECISION_STATUS_UNSPECIFIED";
    SnsProposalDecisionStatus[SnsProposalDecisionStatus.PROPOSAL_DECISION_STATUS_OPEN = 1] = "PROPOSAL_DECISION_STATUS_OPEN";
    SnsProposalDecisionStatus[SnsProposalDecisionStatus.PROPOSAL_DECISION_STATUS_REJECTED = 2] = "PROPOSAL_DECISION_STATUS_REJECTED";
    SnsProposalDecisionStatus[SnsProposalDecisionStatus.PROPOSAL_DECISION_STATUS_ADOPTED = 3] = "PROPOSAL_DECISION_STATUS_ADOPTED";
    SnsProposalDecisionStatus[SnsProposalDecisionStatus.PROPOSAL_DECISION_STATUS_EXECUTED = 4] = "PROPOSAL_DECISION_STATUS_EXECUTED";
    SnsProposalDecisionStatus[SnsProposalDecisionStatus.PROPOSAL_DECISION_STATUS_FAILED = 5] = "PROPOSAL_DECISION_STATUS_FAILED";
})(SnsProposalDecisionStatus || (SnsProposalDecisionStatus = {}));
// Source: https://github.com/dfinity/ic/blob/master/rs/sns/governance/proto/ic_sns_governance/pb/v1/governance.proto
export var SnsNeuronPermissionType;
(function (SnsNeuronPermissionType) {
    SnsNeuronPermissionType[SnsNeuronPermissionType.NEURON_PERMISSION_TYPE_UNSPECIFIED = 0] = "NEURON_PERMISSION_TYPE_UNSPECIFIED";
    // The principal has permission to configure the neuron's dissolve state. This includes
    // start dissolving, stop dissolving, and increasing the dissolve delay for the neuron.
    SnsNeuronPermissionType[SnsNeuronPermissionType.NEURON_PERMISSION_TYPE_CONFIGURE_DISSOLVE_STATE = 1] = "NEURON_PERMISSION_TYPE_CONFIGURE_DISSOLVE_STATE";
    // The principal has permission to add additional principals to modify the neuron.
    // The nervous system parameter `NervousSystemParameters::neuron_grantable_permissions`
    // determines the maximum set of privileges that a principal can grant to another principal in
    // the given SNS.
    SnsNeuronPermissionType[SnsNeuronPermissionType.NEURON_PERMISSION_TYPE_MANAGE_PRINCIPALS = 2] = "NEURON_PERMISSION_TYPE_MANAGE_PRINCIPALS";
    // The principal has permission to submit proposals on behalf of the neuron.
    // Submitting proposals can change a neuron's stake and thus this
    // is potentially a balance changing operation.
    SnsNeuronPermissionType[SnsNeuronPermissionType.NEURON_PERMISSION_TYPE_SUBMIT_PROPOSAL = 3] = "NEURON_PERMISSION_TYPE_SUBMIT_PROPOSAL";
    // The principal has permission to vote and follow other neurons on behalf of the neuron.
    SnsNeuronPermissionType[SnsNeuronPermissionType.NEURON_PERMISSION_TYPE_VOTE = 4] = "NEURON_PERMISSION_TYPE_VOTE";
    // The principal has permission to disburse the neuron.
    SnsNeuronPermissionType[SnsNeuronPermissionType.NEURON_PERMISSION_TYPE_DISBURSE = 5] = "NEURON_PERMISSION_TYPE_DISBURSE";
    // The principal has permission to split the neuron.
    SnsNeuronPermissionType[SnsNeuronPermissionType.NEURON_PERMISSION_TYPE_SPLIT = 6] = "NEURON_PERMISSION_TYPE_SPLIT";
    // The principal has permission to merge the neuron's maturity into
    // the neuron's stake.
    /**
     * @deprecated
     */
    SnsNeuronPermissionType[SnsNeuronPermissionType.NEURON_PERMISSION_TYPE_MERGE_MATURITY = 7] = "NEURON_PERMISSION_TYPE_MERGE_MATURITY";
    // The principal has permission to disburse the neuron's maturity to a
    // given ledger account.
    SnsNeuronPermissionType[SnsNeuronPermissionType.NEURON_PERMISSION_TYPE_DISBURSE_MATURITY = 8] = "NEURON_PERMISSION_TYPE_DISBURSE_MATURITY";
    // The principal has permission to stake the neuron's maturity.
    SnsNeuronPermissionType[SnsNeuronPermissionType.NEURON_PERMISSION_TYPE_STAKE_MATURITY = 9] = "NEURON_PERMISSION_TYPE_STAKE_MATURITY";
    // The principal has permission to grant/revoke permission to vote and submit
    // proposals on behalf of the neuron to other principals.
    SnsNeuronPermissionType[SnsNeuronPermissionType.NEURON_PERMISSION_TYPE_MANAGE_VOTING_PERMISSION = 10] = "NEURON_PERMISSION_TYPE_MANAGE_VOTING_PERMISSION";
})(SnsNeuronPermissionType || (SnsNeuronPermissionType = {}));
export const SnsNeuronPermissions = [
    SnsNeuronPermissionType.NEURON_PERMISSION_TYPE_CONFIGURE_DISSOLVE_STATE,
    SnsNeuronPermissionType.NEURON_PERMISSION_TYPE_DISBURSE,
    SnsNeuronPermissionType.NEURON_PERMISSION_TYPE_DISBURSE_MATURITY,
    SnsNeuronPermissionType.NEURON_PERMISSION_TYPE_MANAGE_PRINCIPALS,
    SnsNeuronPermissionType.NEURON_PERMISSION_TYPE_MANAGE_VOTING_PERMISSION,
    SnsNeuronPermissionType.NEURON_PERMISSION_TYPE_SPLIT,
    SnsNeuronPermissionType.NEURON_PERMISSION_TYPE_STAKE_MATURITY,
    SnsNeuronPermissionType.NEURON_PERMISSION_TYPE_MERGE_MATURITY,
    SnsNeuronPermissionType.NEURON_PERMISSION_TYPE_SUBMIT_PROPOSAL,
    SnsNeuronPermissionType.NEURON_PERMISSION_TYPE_UNSPECIFIED,
    SnsNeuronPermissionType.NEURON_PERMISSION_TYPE_VOTE,
];
export const HotKeysPermissions = [
    SnsNeuronPermissionType.NEURON_PERMISSION_TYPE_SUBMIT_PROPOSAL,
    SnsNeuronPermissionType.NEURON_PERMISSION_TYPE_VOTE,
];
// # sourceMappingURL=sns.js.map