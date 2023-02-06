---
displayed_sidebar: RTTutSidebar
sidebar_position: 9
---

# Modifying a Branch Circuit

How to work with branch circuits.

Start in the <dtitle>FIRST FLOOR POWER</dtitle> floor plan.

## Modify Circuits with Circuit Edit

1. Select panel A and run the <dmcommand>DM Electrical→ ![](img/dmert-red-c-16.png) Circuit Edit</dmcommand> command. The <dtitle>Circuit Edit</dtitle> dialog box will open with panel A active.
2. Select circuit 2 using the middle grid and make the following changes:
   1. In the <dtitle>Circuit Details</dtitle> section, erase the <tfield>Description Replacement</tfield> value.
   2. Set <dfield>OCP Trip</dfield> to <value>30</value>.
   3. In the middle grid, select the <tfield>Description</tfield> and add "Existing " to the beginning of the value. In the <dtitle>Circuit Details</dtitle> section, the <sfield>Description</sfield> and <tfield>Description Prefix</tfield> values will update to reflect the change.  
   You can also use the <tfield>Description Prefix</tfield> field to make this change.
3. Select circuit 8 using the middle grid and make the following changes:
   1. In the middle grid, set <tfield>Description</tfield> to <value>REC</value>. In the <dtitle>Circuit Details</dtitle> section, the <sfield>Description</sfield> and <tfield>Description Replacement</tfield> values will update to reflect the change.
   You can also use the <tfield>Description Replacement</tfield> field to make this change.
   2. In the <dtitle>Circuit Details</dtitle> section, set <dfield>Circuit Length</dfield> to <value>Fixed</value> and enter <value>150</value> for the value. The <sfield>Voltage Drop</sfield> value will update to 3%.
   3. Set <dfield>Conductor</dfield> to 30A. The <sfield>Voltage Drop</sfield> value will update to a lower value.
4. Press the <button>Exit</button> button to close the dialog box.