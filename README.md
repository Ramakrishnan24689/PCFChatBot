# PCFChatBot

A PCF component for integrating Power virtual agent with Powerapps. 

This solution gives the ability to utilize chatbot along with Canvas or Model Driven apps.


# Dependencies
Fluent UI : https://developer.microsoft.com/en-us/fluentui

# Reference 

Build using this example : https://developer.microsoft.com/en-us/fluentui#/controls/web/panel

## Usage

### Step 1 - Import the solution

  Option 1 - Import the PCFChatboxSolution zip file directly into CDS. Managed or Unmanaged Solution.

  Option 2 
  - git clone the repo
  - npm install
  - npm run build
  
### Step 2 - Add the component
 Create a single line text field and add the component.
 
### Step 3 - Add Property Value

Add properties

![](https://github.com/Ramakrishnan24689/PCFChatBot/blob/main/Chatbot/assets/Custom-Properties.png)

Property Name|Value
--------|---------
chatbotURL |URL of PVA (e.g. https://powerva.microsoft.com/webchat/bots/935debfc-9961-4c0e-bafb-d633f852ec42)
To sele|Environment URL(used in step 1)
Select Width| e.g. Medium
width in px| e.g. 888 

Important : 'Width in px' is optional and it is applicable only when "Custom" or "Custom Near" is selected as Width property.

![](https://github.com/Ramakrishnan24689/PCFChatBot/blob/main/Chatbot/assets/Properties.png)

For more information on Width, see documentation https://developer.microsoft.com/en-us/fluentui#/controls/web/panel#PanelType



## Glimpse of the component 

### In Model driven app

![](https://github.com/Ramakrishnan24689/PCFChatBot/blob/main/Chatbot/assets/modedrivenapps.gif)

### In canvas app

![](https://github.com/Ramakrishnan24689/PCFChatBot/blob/main/Chatbot/assets/canvasapp.gif)


## Refer below link for packaging & deploying the solution

 https://docs.microsoft.com/en-us/powerapps/developer/component-framework/import-custom-controls 
 
## Refer this article for more information in this regard

 https://www.linkedin.com/pulse/use-power-virtual-agents-powerapps-via-pcf-ramakrishnan-raman

## Solution

Solution|Author(s)
--------|---------
PCFChatBot|Ramakrishnan Raman

## Disclaimer

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**
