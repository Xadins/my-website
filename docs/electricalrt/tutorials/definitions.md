---
displayed_sidebar: RTTutSidebar
sidebar_position: 2
---

# Definitions: Distribution Equipment and Branch Circuit Device

We have two definitions that are unique to our software: distribution equipment and branch circuit device. Revit does not have categories that exactly match these terms. The electrical industry as a whole does not have words that match these terms. We use these terms in our software because they help explain how our calculations use the Revit model.

## Distribution Equipment

Distribution equipment refers to the equipment in the project that provides power to other equipment or devices.

In real-world terms, distribution equipment includes panels, transformers, switchboards, bus ducts, and other similar equipment. They are fed by feeders. Arc-flash calculations only happen at distribution equipment.

In Revit, distribution equipment includes all of the equipment that have their <dfield>Part Type</dfield> set to <value>Panelboard</value>, <value>Other Panel</value>, <value>Transformer</value>, or <value>Switchboard</value>.

These tutorials only use panels and transformers, but the concepts work the same for other types of distribution equipment.

## Branch Circuit Device

Branch circuit device refers to electrical devices that are connected to distribution equipment and do not have anything else connected to them.

In real-world terms, branch circuit devices include receptacles, light fixtures, switches, mechanical equipment, kitchen equipment, and other similar devices. They are fed by branch circuits.

In Revit, branch circuit devices are either electrical fixtures, or electrical equipment with their <dfield>Part Type</dfield> set to <value>Equipment Switch</value>.