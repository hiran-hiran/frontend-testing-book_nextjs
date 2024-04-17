import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { Preview } from "@storybook/react";
import { initialize, mswDecorator, mswLoader } from "msw-storybook-addon";
import { RouterContext } from "next/dist/shared/lib/router-context.shared-runtime";
import { withScreenshot } from "storycap";
import { handleGetMyProfile } from "../src/services/client/MyProfile/__mock__/msw";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on.*" },
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
    decorators: [mswDecorator, withScreenshot],
  },
  loaders: [mswLoader],
};

initialize();

export default preview;
