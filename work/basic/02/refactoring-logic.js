/**
 * Refactorización de la función processUsers para mejorar estructura, legibilidad, reutilización y manejo de errores.
 */

// Función para validar si el usuario es mayor de edad
function isAdult(user) {
    if (typeof user.age !== 'number') throw new Error(`Invalid age for user ${user.name}`);
    return user.age >= 18;
}

// Función para validar el email (validación simple)
function isValidEmail(user) {
    if (typeof user.email !== 'string') throw new Error(`Invalid email for user ${user.name}`);
    return user.email.includes('@');
}

// Función para obtener el mensaje de acceso según la suscripción
function getSubscriptionMessage(user) {
    switch (user.subscription) {
        case 'premium':
            return `${user.name} has access to all features.`;
        case 'basic':
            return `${user.name} has limited access.`;
        default:
            return `${user.name} has no access.`;
    }
}

// Función principal para procesar usuarios con manejo de errores
function processUsers(users) {
    users.forEach(user => {
        console.log('*******************************');
        try {
            console.log(
                isAdult(user)
                    ? `${user.name} is an adult.`
                    : `${user.name} is not an adult.`
            );
            console.log(
                isValidEmail(user)
                    ? `${user.name} email is valid.`
                    : `${user.name} email is invalid.`
            );
            console.log(getSubscriptionMessage(user));
        } catch (error) {
            console.error(`Error processing user ${user.name}:`, error.message);
        }
    });
}

// Ejemplo de uso
const users = [
    { name: 'Alice', age: 25, email: 'alice@example.com', subscription: 'premium' },
    { name: 'Bob', age: 17, email: 'bobexample.com', subscription: 'basic' },
    { name: 'Charlie', age: 30, email: 'charlie@example.com', subscription: 'none' },
    { name: 'David', age: 'unknown', email: 12345, subscription: 'premium' }, // Usuario con datos inválidos
];

processUsers(users);