import * as React from 'react';
import { useState, useEffect } from 'react';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { Panel, PanelType } from '@fluentui/react/lib/Panel';
import { useBoolean } from '@uifabric/react-hooks';
import { PrimaryButton } from '@fluentui/react';
import { initializeIcons } from '@uifabric/icons';
import { FontIcon } from 'office-ui-fabric-react/lib/Icon';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';

export interface IPCFChatbotProps {
  chatbotURL: string;
  panelType: PanelType;
  width: string;
}

/*const options: IDropdownOption[] = [
  { text: 'Small (default)', key: String(PanelType.smallFixedFar) },
  { text: 'Small, near side', key: String(PanelType.smallFixedNear) },
  { text: 'Medium', key: String(PanelType.medium) },
  { text: 'Large', key: String(PanelType.large) },
  { text: 'Large fixed-width', key: String(PanelType.largeFixed) },
  { text: 'Extra large', key: String(PanelType.extraLarge) },
  { text: 'Full-width (fluid)', key: String(PanelType.smallFluid) },
  { text: 'Custom (example: 888px)', key: String(PanelType.custom) },
  { text: 'Custom (example: 888px), near side', key: String(PanelType.customNear) },
];*/

const iconClass = mergeStyles({
  fontSize: 50,
  height: 50,
  width: 50,
  margin: '0 25px',
});


export const Chatbot: React.FunctionComponent<IPCFChatbotProps> = props => {
  initializeIcons();
  const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] = useBoolean(false);
  /*const [panelType, getPanelType]= useState(props.panelType);

  
  useEffect(() => {
    getPanelType();
  }, [siteURL, isSiteAppCatalog, appID]);

  function getPanelType(panelType: number){
    return PanelType[panelType];
  }*/
  
  return (
    <div>
      <PrimaryButton style={{ height: 100, width: 100 }} onClick={openPanel} >
        <FontIcon iconName="ChatBot" className={iconClass} />
      </PrimaryButton>
      <Panel
        isOpen={isOpen}
        onDismiss={dismissPanel}
        type={props.panelType}
        customWidth={Number(props.panelType) === PanelType.custom || Number(props.panelType) === PanelType.customNear ? props.width.concat("px") : undefined}
        // You MUST provide this prop! Otherwise screen readers will just say "button" with no label.
        closeButtonAriaLabel="Close"
      >
        <iframe src={props.chatbotURL} style={{ height: window.innerHeight - 100, width: "100%" }}></iframe>
      </Panel>
    </div>
  );


};
