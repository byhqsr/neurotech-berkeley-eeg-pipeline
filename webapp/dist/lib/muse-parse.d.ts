import { Observable } from 'rxjs';
import { AccelerometerData, GyroscopeData, TelemetryData } from './muse-interfaces';
export declare function parseControl(controlData: Observable<string>): Observable<any>;
export declare function decodeUnsigned12BitData(samples: Uint8Array): number[];
export declare function decodeEEGSamples(samples: Uint8Array): number[];
export declare function parseTelemetry(data: DataView): TelemetryData;
export declare function parseAccelerometer(data: DataView): AccelerometerData;
export declare function parseGyroscope(data: DataView): GyroscopeData;
