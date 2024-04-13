import { handleGetMyProfile } from "@/services/client/MyProfile/__mock__/msw";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { initialize, mswDecorator } from "msw-storybook-addon";
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { withScreenshot } from "storycap";
import  { Preview } from '@storybook/react';

const preview: Preview = {
  parameters:{
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    nextRouter: {
      Provider: RouterContext.Provider,
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    msw: { handlers: [handleGetMyProfile()] },
    layout: "fullscreen",
    decorators: [mswDecorator, withScreenshot]
}

};


initialize();

export default preview;
