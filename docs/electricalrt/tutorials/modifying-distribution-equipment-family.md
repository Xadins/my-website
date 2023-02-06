---
displayed_sidebar: RTTutSidebar
sidebar_position: 6
---

# Modifying a Distribution Equipment Family

How to work with distribution equipment families.

Start in the <dtitle>FIRST FLOOR POWER</dtitle> floor plan.

## Modify the Family for UTIL

1. Select transformer UTIL and run the Revit the <acommand>Modify | Electrical Equipment→ ![](img/revit--edit-family.png) Edit Family</acommand> command. The family file will open.
2. Run the <dmcommand>DM Electrical→ ![](img/dmert-family-16.png) Family Edit</dmcommand> command. The <dtitle>Family Edit</dtitle> dialog box will open.
3. Make the following changes to the family:
   1. In the <dtitle>Family Settings</dtitle> section, set <dfield>Device Type</dfield> to <value>Distribution equipment: Transformer</value>.
   2. In the <dtitle>200 kVA</dtitle> section, set <dfield>Override Family Values</dfield> to <value>Yes</value>.
   3. Set <dfield>Size</dfield> to <value>200</value>.
   4. In the <dtitle>1000 kVA</dtitle> section, set <dfield>Override Family Values</dfield> to <value>Yes</value>.
   5. Set <dfield>Size</dfield> to <value>1000</value>.
4. Press the <button>OK</button> button to close the dialog box.
5. Run the Revit <acommand>Create / DM Electrical→ ![](img/revit--load-project.png) Load into Project / ![](img/revit--load-project-close.png) Load into Project and Close</acommand> command to update the family and its parameter values in the project.  
:::note
You do not need to save the family file, but if you do not save, the parameters will only be used for this project.
:::
6. Select UTIL and use the Revit <dtitle>Properties</dtitle> panel to change the <dfield>Type</dfield> to <value>1000 kVA</value>.
7. Run the <dmcommand>DM Electrical→ ![](img/dmert-red-p-16.png) Panel Edit</dmcommand> command. The Panel Edit dialog box will open with UTIL active.

The <dfield>Size</dfield> value has been updated to reflect the changes made to the family.

1. Press the <button>Exit</button> button to close the dialog box.
2. Set the <dfield>Type</dfield> to <value>200 kVA</value> and run the <dmcommand>DM Electrical→ ![](img/dmert-red-p-16.png) Panel Edit</dmcommand> command again to see how the <dfield>Size</dfield> changes.