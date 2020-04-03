<script>

function checkAge() {
  let validateAge = document.getElementById("age");
  if (!checkAge.checkAgeValidity()) {
    document.getElementById("age").innerHTML = validateAge.validateMessage;
  } else {
    document.getElementById("age").innerHTML = "Age requirement met";
  }
}

</script>