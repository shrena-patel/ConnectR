export const INIT_CANDIDATE = 'INIT_CANDIDATE'

export function initCandidate (candidate) {
    return {
        type: INIT_CANDIDATE,
        candidate: candidate
    }
}