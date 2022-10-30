<script setup>
import AdminNavbar from '../components/Navbar/AdminNavbar.vue'
import Sidebar from '../components/Sidebar/Sidebar.vue'
import HeaderStats from '../components/Header/HeaderStats.vue'
import FooterAdmin from '../components/Footer/FooterAdmin.vue'
</script>

<template>
	<div>
		<Sidebar />
		<div class="relative bg-slate-100 md:ml-64">
			<AdminNavbar />
			<HeaderStats />
			<div class="-m-24 mx-auto w-full px-4 md:px-10">
				<router-view />
				<FooterAdmin />
			</div>
		</div>
	</div>
</template>
