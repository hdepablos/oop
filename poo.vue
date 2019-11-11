<template>
  <div id="divContent" class="content">
    <div class="row">
      <div class="col-md-10 col-md-offset-1">
        <div class="box box-primary">
          <div class="box-header">
            <span class="icon-bar-chart" style="font-size:18px;"></span>
            <h3 class="box-title">Consultas cambiada</h3>
            <div class="box-tools pull-right">
              <button
                class="btn btn-box-tool"
                id="btnCerrarForm"
                data-widget="remove"
                type="button"
              >
                <i class="fa fa-remove"></i>
              </button>
            </div>
          </div>
          <div class="box-body">
            <div class="content">
              <form
                action
                @submit.prevent="procesar"
                @keydown="form.errors.clear($event.target.name)"
              >
                {{ errors }}
                <div
                  class="form-group"
                  :class="{ 'has-error': form.errors.has('name') || errors.has('name')}"
                >
                  <label for="name label-control">Nombre</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="nombre"
                    name="name"
                    id="name"
                    v-model="form.name"
                    v-validate="'required|min:3|max:100'"
                    data-vv-as="nombre"
                  />
                  <!-- :v-text="form.errors.get('name') || errors.first('name')" -->
                  <span
                    class="text-danger small"
                    v-if="form.errors.has('name') || errors.has('name')"
                  >{{ errors.first('name') }} {{ form.errors.get('name') }}</span>
                </div>

                <div
                  class="form-group"
                  :class="{ 'has-error': form.errors.has('description') || errors.has('description')}"
                >
                  <label for="name label-control">Descripción</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="descripción"
                    name="description"
                    id="description"
                    v-model="form.description"
                    data-vv-as="descripción"
                    v-validate="'required|min:3|max:100'"
                  />
                  <span
                    class="text-danger small"
                    v-if="form.errors.has('description') || errors.has('description')"
                  >{{ errors.first('description') }} {{ form.errors.get('description') }}</span>
                </div>

                <div class="control">
                  <button class="btn btn-primary" :disabled="form.errors.any()">Crear...</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormPoo from "./service/FormPoo";

export default {
  computed: {},
  data() {
    return {
      form: new FormPoo({
        name: null,
        description: null
      })
    };
  },
  created() {},
  mounted() {},
  methods: {
    async procesar() {
      if (!(await this.$validator.validateAll())) return;
      await this.form.saveData();
      this.$validator.reset();
    }
  }
};
</script>

<style scoped>
</style>