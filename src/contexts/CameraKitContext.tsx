import { bootstrapCameraKit, CameraKitSession, Lens } from '@snap/camera-kit';
import { createContext, useEffect, useRef, useState } from 'react';

const apiToken = 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzM4NDkxMzU4LCJzdWIiOiJhMWZjNjVjYS1kYTExLTRhYTItYTIzMS0yNTY4NDg4NjI4NGV-U1RBR0lOR342MDdjNWQzZS0wOGU0LTRhYzEtYjFiZi0wY2M5ZGUwNmVlMTgifQ.uZpP9qeBFW7-8IVonL3izETfQwjQo0DHgmqpre08H3k';
const lensGroupId = '3f933e66-7465-4caf-a58a-6f0473baa751';

export interface CameraKitState {
    session: CameraKitSession;
    lenses: Lens[];
}

export const CameraKitContext = createContext<CameraKitState | null>(null);

export const CameraKit: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const isInitialized = useRef<boolean>(false);
    const [session, setSession] = useState<CameraKitSession | null>(null);
    const [lenses, setLenses] = useState<Lens[]>([]);
    
    useEffect(() => {
        const initializeCameraKit = async () => {
        const cameraKit = await bootstrapCameraKit({ apiToken });
        const session = await cameraKit.createSession();
        const { lenses } = await cameraKit.lensRepository.loadLensGroups([
            lensGroupId,
        ]);

        setLenses(lenses);
        setSession(session);
        };

        if (isInitialized.current) return;
        isInitialized.current = true;

        initializeCameraKit();
    }, []);

    return !session ? (
        <div>Initializing Camera Kit...</div>
    ) : (
        <CameraKitContext.Provider value={{ session, lenses }}>
        {children}
        </CameraKitContext.Provider>
    );
};