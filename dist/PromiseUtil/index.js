"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseUtil = void 0;
const asyncDelayOfForever_1 = require("./_internal/asyncDelayOfForever");
const asyncSequenceGivenArrayAndCallback_1 = require("./_internal/asyncSequenceGivenArrayAndCallback");
const asyncSequenceGivenCountAndCallback_1 = require("./_internal/asyncSequenceGivenCountAndCallback");
const asyncValueGivenArrayAndFilter_1 = require("./_internal/asyncValueGivenArrayAndFilter");
const asyncValuesGivenArrayAndConverter_1 = require("./_internal/asyncValuesGivenArrayAndConverter");
class PromiseUtil {
}
exports.PromiseUtil = PromiseUtil;
PromiseUtil.asyncDelayOfForever = asyncDelayOfForever_1.asyncDelayOfForever;
PromiseUtil.asyncSequenceGivenArrayAndCallback = asyncSequenceGivenArrayAndCallback_1.asyncSequenceGivenArrayAndCallback;
PromiseUtil.asyncSequenceGivenCountAndCallback = asyncSequenceGivenCountAndCallback_1.asyncSequenceGivenCountAndCallback;
PromiseUtil.asyncValueGivenArrayAndFilter = asyncValueGivenArrayAndFilter_1.asyncValueGivenArrayAndFilter;
PromiseUtil.asyncValuesGivenArrayAndConverter = asyncValuesGivenArrayAndConverter_1.asyncValuesGivenArrayAndConverter;
//# sourceMappingURL=index.js.map