import { ApplicationFeature } from '../../types/features.types';

export namespace FeaturesActions {
  export class CreateFeature {
    static readonly type = '[Features] Create Feature';

    constructor(public payload: ApplicationFeature) {}
  }

  export class UpdateFeature {
    static readonly type = '[Features] Update Feature';

    constructor(public payload: ApplicationFeature) {}
  }

  export class ArchiveFeature {
    static readonly type = '[Features] Archive Feature';

    constructor(public payload: ApplicationFeature) {}
  }
}
