<template>
  <div class="d-flex flex-grow-1 flex-column">
    <AthleteNavBar/>
    <div class="row">
      <div class="col-md-2 offset-md-3">
          <h6>Vali treeningkava</h6>
          <select class="form-select " aria-label="Default select example">
            <option selected>Treeningkava</option>
            <option value="1">One</option>
          </select>
      </div>
      <div class="col-md-4 offset-md-2">
          <h6>Soovid koostada uut treeningkava?</h6>
        <div class="input-group mb-2">
          <span class="input-group-text" id="inputGroup-sizing-default">Treeningkava nimi</span>
          <input type="text" class="form-control" aria-label="Sizing example input"
                 aria-describedby="inputGroup-sizing-default">
        </div>
          <button  type="button" class="btn btn-outline-success btn-lg">
            LISA UUS TREENINGKAVA
          </button>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3 offset-md-3">
        <h4>Harjutused</h4>
        <div class="row-cols-md-3">
        <table class="table">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
          </tbody>
        </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AthleteNavBar from "@/components/navbar/AthleteNavBar";

export default {
  name: "AthleteExerciseView",
  components: {AthleteNavBar}
}
</script>
