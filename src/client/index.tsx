import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@/client/app/providers/ThemeProvider';
import '@/client/app/styles/index.scss';
import '@/client/shared/config/i18n/i18n';
import App from '@/client/app/App';
import ErrorBoundary from '@/client/app/providers/ErrorBoundary';
import { StoreProvider } from '@/client/app/providers/StoreProvider';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);
