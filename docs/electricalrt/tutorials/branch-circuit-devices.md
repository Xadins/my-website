---
displayed_sidebar: RTTutSidebar
sidebar_position: 7
---

# Modifying Branch Circuit Devices

How to work with branch circuit devices.

Start in the <dtitle>FIRST FLOOR POWER</dtitle> floor plan.

## Enable Circuit Descriptions with Design Master

With Design Master Electrical RT, circuit descriptions can be changed in several different places to give you greater control over the values displayed in the panel schedule. By default, this functionality is bypassed so you can continue to set circuit descriptions through typical Revit methods if you prefer.

To control your circuit descriptions using Design Master Electrical RT:

1. Run the <dmcommand>DM Electrical→ ![](img/dmert-grey-c-16.png) Customization→ Project Options</dmcommand> command. The <dtitle>Options</dtitle> dialog box will open.
2. Set <dfield>Circuit description method</dfield> to <value>Use Design Master circuit descriptions</value>.
3. Press the <button>OK</button> button to close the dialog box.

## Modify the Elevator Motor with Circuit Edit

1. Select the elevator motor and run the <dmcommand>DM Electrical→ ![](img/dmert-red-c-16.png) Circuit Edit</dmcommand> command. The <dtitle>Circuit Edit</dtitle> dialog box will open, displaying the circuit to which the elevator motor is connected.
2. Make the following changes to the circuit:
   1. Erase the <tfield>Description Replacement</tfield> value.
   2. Set <dfield>OCP Trip</dfield> to <value>Size automatically</value>.
   3. Set <dfield>OCP Frame</dfield> to <value>Same as trip</value>.
3. Press the <button>Exit</button> button to close the dialog box.

When using Design Master Electrical RT on existing projects, these fields are populated based upon the parameters for the device. New devices inserted in the model are shown in the [Modifying a Branch Circuit Family](modifying-branch-circuit-family.md) section.

## Modify the Elevator Motor with Instance Edit

1. Select the elevator motor and run the <dmcommand>DM Electrical→ ![](img/dmert-red-i-16.png) Instance Edit</dmcommand> command. The <dtitle>Instance Edit</dtitle> dialog box will open.
2. Make the following changes to the elevator motor:
   1. Set <dfield>Circuit Description</dfield> to <value>Set circuit description in instance</value> and, for the <tfield>Custom Circuit Description</tfield>, enter <value>Elev Motor</value>.
   2. Set <dfield>OCP Trip</dfield> to <value>100</value>.
   3. Set <dfield>Conductor</dfield> to <value>Size based upon breaker</value>.
3. Press the <button>OK</button> button to close the dialog box.
4. Select the elevator motor and run the <dmcommand>DM Electrical→ ![](img/dmert-red-c-16.png) Circuit Edit</dmcommand> command to see how the values change.