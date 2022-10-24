<template>
    <div class="card w-1/3 bg-base-100 shadow-xl align-center">
      <div class="card-body items-center text-center">
        <h1 class="title-l">Register</h1>
        <div>
          <input type="text" placeholder="Type here" class="text-l input input-bordered input-primary w-full" />
          <input type="text" placeholder="Type here" class="text-l input input-bordered input-primary w-full" />
          <input type="text" placeholder="Type here" class="text-l input input-bordered input-primary w-full" />
        </div>
      </div>
      <div class="card-actions justify-end mb-5">
        <button class="text-l btn-main btn-wide align-center" @click.prevent="">Create</button>
      </div>
    </div>
</template>