import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import { useBoolean } from '@uifabric/react-hooks';
import { PrimaryButton } from '@fluentui/react';
import { initializeIcons } from '@uifabric/icons';
import { FontIcon } from 'office-ui-fabric-react/lib/Icon';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';

export interface IPCFChatbotProps {
  chatbotURL: string;
}

const iconClass = mergeStyles({
    fontSize: 50,
    height: 50,
    width: 50,
    margin: '0 25px',
  });
  

export const Chatbot: React.FunctionComponent<IPCFChatbotProps> = props => {
  initializeIcons();
  const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] = useBoolean(false);
  return (
    <div>
    <PrimaryButton style={{ height: 100, width: 100}} onClick={openPanel} >
        <FontIcon iconName="ChatBot" className={iconClass}/>
    </PrimaryButton>
    <Panel
      isOpen={isOpen}
      onDismiss={dismissPanel}
      type={PanelType.medium}
      // You MUST provide this prop! Otherwise screen readers will just say "button" with no label.
      closeButtonAriaLabel="Close"
    >
      <iframe src={props.chatbotURL} style={{ height: window.innerHeight-100 , width: "100%"}}></iframe>

    </Panel>
  </div>
  );
};