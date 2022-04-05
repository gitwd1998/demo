<template>
  <div id="app">
    <moa-cells permiss="write">
      <moa-cell
        label="费用承担人"
        v-model="info.a"
        required
        access
        desc="可修改"
      />
      <moa-cell label="费用承担人部门" v-model="info.b" readonly />
      <moa-cell
        label="客户单位"
        v-model="info.c"
        required
        access
        placeholder="请添加"
      />
      <moa-cell
        label="客户类别"
        v-model="info.d"
        required
        access
        placeholder="请选择"
      />
      <moa-cell
        label="客户来源"
        v-model="info.e"
        required
        access
        placeholder="请选择"
        readonly
      />
      <moa-cell
        label="来访背景"
        v-model="info.f"
        required
        access
        placeholder="请选择"
        readonly
      />
      <moa-cell
        label="来访目的"
        v-model="info.g"
        type="textarea"
        maxlength="20"
        required
        readonly
        column
        placeholder="请输入"
      />
      <moa-cell
        label="来访目的"
        v-model="info.g"
        type="textarea"
        maxlength="20"
        required
        column
        placeholder="请输入"
      />
    </moa-cells>
    <moa-cells permiss="read">
      <moa-cell label="费用承担人" v-model="info.a" required access />
      <moa-cell label="费用承担人部门" v-model="info.b" readonly />
      <moa-cell
        label="客户单位"
        v-model="info.c"
        permiss="write"
        required
        access
        placeholder="请添加"
      />
      <moa-cell
        label="客户类别"
        v-model="info.d"
        required
        access
        placeholder="请选择"
      />
      <moa-cell
        label="客户来源"
        v-model="info.e"
        required
        access
        placeholder="请选择"
      />
      <moa-cell
        label="来访背景"
        v-model="info.f"
        required
        access
        placeholder="请选择"
      />
      <moa-cell
        label="来访目的"
        v-model="info.g"
        type="textarea"
        maxlength="20"
        required
        column
        placeholder="请输入"
      />
    </moa-cells>
    <moa-cells
      v-for="(v, i) in list"
      :title="'客户' + ++i"
      :key="i"
      permiss="write"
    >
      <moa-cell label="姓名" v-model="v.name" placeholder="请输入" />
      <moa-cell label="性别" v-model="v.sex">
        <template #cell-body> <input type="radio" />男 </template>
      </moa-cell>
      <moa-cell label="单位" v-model="v.work" access placeholder="青添加" />
      <moa-cell
        label="单位所在区域"
        v-model="v.area"
        access
        placeholder="请选择"
      />
      <moa-cell label="职务" v-model="v.post" placeholder="请输入" />
      <moa-cell label="手机" v-model="v.phone" placeholder="请输入" />
      <moa-cell label="备注" v-model="v.remark" placeholder="请输入" />
    </moa-cells>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {
        a: "xiamingrui",
        b: "综合部/综合部/综合部/综合部/综合部/综合部",
        c: "软件开发组",
        d: "",
        e: "323",
        f: "",
        g: "ceshi",
      },
      list: [
        {
          name: "",
          sex: "",
          work: "",
          area: "",
          post: "",
          phone: "",
          remark: "",
        },
      ],
    };
  },
};
</script>
