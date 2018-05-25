<template>
  <div>

    View Order


  </div>
</template>

<script>
import db from '../firebase/firebaseInit';

export default {
  name: 'Admin',
  data() {
    return {
      employees: [],
    };
  },
  created() {
    db.collection('orders').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data());
      });
    });
  },
};
</script>
