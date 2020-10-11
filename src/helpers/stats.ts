import { Phase } from '../enums/stats';
import { IStat } from '../types/fixtures';

export function getStatByPhase(stat: IStat, phase: Phase): number {
    switch(phase) {
        case Phase.FirstHalf:
            return parseFloat(stat.fh);
        case Phase.SecondHalf:
            return parseFloat(stat.sh);
        case Phase.FullMatch:
        default:
            return parseFloat(stat.value);
    }
}
