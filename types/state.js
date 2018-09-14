//@flow
import type {Reducers} from 'Store/index.js';

type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V;

export type State = $ObjMap<Reducers, $ExtractFunctionReturn>;
