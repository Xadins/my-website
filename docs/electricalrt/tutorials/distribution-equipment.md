---
displayed_sidebar: RTTutSidebar
sidebar_position: 5
---

# Modifying Distribution Equipment

How to work with distribution equipment.

Start in the <dtitle>FIRST FLOOR POWER</dtitle> floor plan.

## Modify Distribution Equipment

1. Select transformer UTIL and run the <dmcommand>DM Electrical→ ![](img/dmert-red-p-16.png) Panel Edit</dmcommand> command. The <dtitle>Panel Edit</dtitle> dialog box will open with UTIL active.
2. Make the following changes to UTIL:
   1. Set <dfield>Size</dfield> to 200.
   2. In the <dtitle>Fault Calculations</dtitle> section, set <dfield>Utility Fault at Device</dfield> to <value>Fixed</value> and enter <value>55000</value> for the value.  
   :::note
   The fault must be set for the topmost distribution equipment in your model; if not, an infinite fault from the utility is assumed.
   :::
3. Select panel <value>MDP</value> from the list. If the list is not visible, press the <button>Load Panels</button> button. Make the following changes to MDP:
   1. Set <dfield>Bus Size / Mains</dfield> to <value>400</value>.
   2. Set <dfield>Main Disconnect Type</dfield> to <value>Breaker</value>.
   3. In the <dtitle>Upstream Connection</dtitle> section, set <dfield>OCP Frame</dfield> to <value>500</value>.
4. Select panel <value>DP</value> from the list and make the following changes:
   1. Set <dfield>Bus Size / Mains</dfield> to <value>300</value>.
   2. Set <dfield>Main Disconnect Type</dfield> to <value>Breaker</value>.
5. Press the <button>Exit</button> button to close the dialog box.
6. Open the <dtitle>ONE-LINE DIAGRAM</dtitle> drafting view.

The one-line diagram has been updated to reflect the changes made to the distribution equipment. Any further changes made to the electrical model will be updated automatically.