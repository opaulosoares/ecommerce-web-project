export const Role = {
    Unregistered: 0b001,
    Costumer: 0b010,
    Admin: 0b100,

    None: 0b000,
    Any: 0b111,
};

export function userTypeToRole(type) {
    switch (type) {
        case "unregistered":
            return Role.Unregistered;
        case "costumer":
            return Role.Costumer;
        case "admin":
            return Role.Admin;
        default:
            return Role.None;
    }
}
