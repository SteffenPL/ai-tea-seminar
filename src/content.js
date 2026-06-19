import { parse } from 'smol-toml';
import seminarToml from '../content/seminars.toml?raw';

const seminarData = parse(seminarToml);

export const upcomingSeminars = seminarData.upcoming ?? [];
export const pastSeminars = seminarData.past ?? [];
