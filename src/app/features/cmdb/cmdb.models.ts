export type AssetType = 'Hardware' | 'Software' | 'IoT' | 'AI_Model';
export type AssetStatus = 'Activo' | 'Inactivo' | 'En mantenimiento';
export type Criticality = 'Baja' | 'Media' | 'Alta' | 'Crtica';

export interface AssetCore { id: number; assetTag: string; name: string; assetType: AssetType; status: AssetStatus; criticality: Criticality; owner: string; cpeString: string; createdAt: string; }
export interface HardwareAsset extends AssetCore { assetType: 'Hardware'; macAddress: string; ipAddress: string; operatingSystem: string; manufacturer: string; }
export interface SoftwareAsset extends AssetCore { assetType: 'Software'; version: string; license: string; publiclyExposed: boolean; }
export interface IoTAsset extends AssetCore { assetType: 'IoT'; protocol: string; firmware: string; networkSegment: string; }
export interface AiAsset extends AssetCore { assetType: 'AI_Model'; provider: string; deploymentMode: string; dataClassification: string; }
export type CmdbAsset = HardwareAsset | SoftwareAsset | IoTAsset | AiAsset;

