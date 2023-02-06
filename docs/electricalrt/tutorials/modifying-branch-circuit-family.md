---
displayed_sidebar: RTTutSidebar
sidebar_position: 8
---

# Modifying a Branch Circuit Family

How to work with branch circuit device families.

Start in the <dtitle>FIRST FLOOR POWER</dtitle> floor plan.

## Modify the Family for the Elevator Motor

1. Select the elevator motor and run the Revit <acommand>Modify | Electrical Equipment→ ![](img/revit--edit-family.png) Edit Family</acommand> command. The family file will open.
2. Run the <dmcommand>DM Electrical→ ![](img/dmert-family-16.png) Family Edit</dmcommand> command. The <dtitle>Family Edit</dtitle> dialog box will open.
3. Make the following changes to the family:
   1. In the <dtitle>Family Settings</dtitle> section, set <dfield>Device Type</dfield> to <value>Branch circuit device: Equipment connection</value>.
   2. Set <tfield>MOCP</tfield> to <value>40</value>.
   3. Set <dfield>OCP Trip</dfield> to <value>Motor-compressor, <= MOCP</value>.
   4. Set <dfield>Conductor</dfield> to <value>Size based upon loads</value>.
4. Press the <button>OK</button> button to close the dialog box.
5. Run the Revit <acommand>Create / DM Electrical→ ![](img/revit--load-project.png) Load into Project / ![](img/revit--load-project-close.png) Load into Project and Close</acommand> command to update the family and its parameter values in the project.  
:::note
You do not need to save the family file, but if you do not save, the parameters will only be used for this project.
:::

## Modify the Elevator Motor with Instance Edit

1. Select the elevator motor and run the <dmcommand>DM Electrical→ ![](img/dmert-red-i-16.png) Instance Edit</dmcommand> command. The <dtitle>Instance Edit</dtitle> dialog box will open.
2. Set <dfield>OCP Trip</dfield> to <value>70</value>.
3. Press the <button>OK</button> button to close the dialog box.
4. Select the elevator motor and run the <dmcommand>DM Electrical→ ![](img/dmert-red-c-16.png) Circuit Edit</dmcommand> command to see how the values set in the family are overridden by the values set in the instance.
