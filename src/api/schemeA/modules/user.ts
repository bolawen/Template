import { get } from '../request';

const findUser = (params = {}): Promise<UserInfoTypes> => get('/user/find', params);
export default { findUser };
