import { collection, addDoc, getFirestore } from 'firebase/firestore';

// Obtener la instancia de Firestore
const db = getFirestore();

// Función para crear un nuevo documento en la colección 'Users'
async function createUserDoc(email: string, uid: string, appointments: any[]) {
  try {
    // Agregar un nuevo documento a la colección 'Users'
    const docRef = await addDoc(collection(db, 'Users'), {
      email,
      uid,
      appointments
    });

    console.log('Nuevo documento agregado con ID: ', docRef.id);
  } catch (e) {
    console.error('Error al agregar el documento: ', e);
  }
}