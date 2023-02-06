---
displayed_sidebar: RTTutSidebar
sidebar_position: 3
---

# Making Changes: Don't Modify the Shared Parameters

While using Design Master Electrical RT, you should make changes to the model using the <dmcommand>Panel Edit</dmcommand>, <dmcommand>Circuit Edit</dmcommand>, and <dmcommand>Instance Edit</dmcommand> commands.

Do not make changes to the shared parameters that are used by the software, either through the <dtitle>Properties</dtitle> window, <dtitle>Schedules</dtitle>, or <dtitle>Panel Schedules</dtitle>. Those values are used only for output purposes. They are not used for input. Design Master Electrical RT will overwrite any changes you make to those values the next time an update happens.

The built-in circuit <sparam>Rating</sparam> value for electrical systems is also controlled by Design Master Electrical RT. Previously, to change a breaker size, you would set it in the panel schedule. That will no longer work. Instead, you need to change the value that controls the breaker size using Design Master Electrical RT commands.

The built-in circuit description value for electrical systems can also be controlled by Design Master Electrical RT. The [Modifying Branch Circuit Devices](branch-circuit-devices.md) section describes how to enable this feature and how to change the description using Design Master commands.