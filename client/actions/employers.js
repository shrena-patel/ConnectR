export const INIT_EMPLOYER = 'INIT_EMPLOYER'

export function initEmployer (employer) {
    return {
        type: INIT_EMPLOYER,
        employer: employer
    }
}