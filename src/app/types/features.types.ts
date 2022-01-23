export interface ApplicationFeature {
  id: number;
  displayName?: string;
  technicalName: string;
  effectiveDate?: Date;
  description?: string;
  enabled: boolean;
  ApplicationIds: string[];
}
