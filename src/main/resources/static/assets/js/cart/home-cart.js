app = angular.module("home-cart", []);
app.controller("cart-ctrl", function($scope, $http, $location) {
	//Header
	$scope.auth = true;
	$scope.amountItems = 34;
	$scope.phone = '0942.xxx.xxx'
	$scope.email = 'anv123@mail.com'
	$scope.storeid = 2;// Chỉ cần lấy id của store trến session gắn dô đây là ok
	$scope.userid = 2;//Chỉ cần lấy id của user trến session gắn dô đây là ok

	// list product
	$scope.titleStore = 'Chickens gang'
	$scope.favorite = false;

	// Load list products
	$scope.url = "/api/product";
	$scope.products=[];
	$scope.listProducts = function() {
		$http.get($scope.url).then(resp => { 
            $scope.products = resp.data;
        });
	}
	
	// Phân trang và điều hướng
    $scope.pager = {
        page: 0,
        size: 8,
        get products(){
            var start = this.page * this.size;
            return $scope.products.slice(start, start + this.size);
        },
        get count(){
            return Math.ceil(1.0 * $scope.products.length / this.size);
        },
        first(){
            this.page = 0;
        },
        prev(){
            this.page--;
            if(this.page < 0){
                this.last();
            }
        },
        next(){
            this.page++;
            if(this.page >= this.count){
                this.first();
            }
        },
        last(){
            this.page = this.count - 1;
        },
    }
	
	$scope.listProducts();

	$scope.cateArr = {
		cates: [
			{
				"id": "01",
				"name": "Bánh mì"
			},
			{
				"id": "02",
				"name": "Nước suối"
			},
			{
				"id": "03",
				"name": "Nước ngọt"
			},
			{
				"id": "04",
				"name": "Hamberger"
			},
		]
	}


	//list favorite
	$scope.arr3 = {
		products3: [
			{
				id: '01',
				name: 'Sản phẩm 1',
				price: 100000000000000000000,
				discount: 20,
				description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
				amount: 100,
				image: 'sp1.jpg'
			},
			{
				id: '02',
				name: 'Sản phẩm 2',
				price: 50000,
				discount: 17.5,
				description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
				amount: 100,
				image: 'sp3.jpeg'
			},
			{
				id: '03',
				name: 'Sản phẩm 3',
				price: 199000,
				discount: 27,
				description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
				amount: 100,
				image: 'sp4.jpeg'
			},

			{
				id: '01',
				name: 'Sản phẩm 1',
				price: 100000,
				discount: 20,
				description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
				amount: 100,
				image: 'sp1.jpg'
			},
			{
				id: '02',
				name: 'Sản phẩm 2',
				price: 50000,
				discount: 17.5,
				description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
				amount: 100,
				image: 'sp3.jpeg'
			},
			{
				id: '03',
				name: 'Sản phẩm 3',
				price: 199000,
				discount: 27,
				description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
				amount: 100,
				image: 'sp4.jpeg'
			},
			{
				id: '01',
				name: 'Sản phẩm 1',
				price: 100000,
				discount: 20,
				description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
				amount: 100,
				image: 'sp1.jpg'

			},
			{
				id: '02',
				name: 'Sản phẩm 2',
				price: 50000,
				discount: 17.5,
				description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
				amount: 100,
				image: 'sp3.jpeg'

			}
		]
	}


	// Cart Control
	$scope.items = [];

	$scope.ship = [];

	$scope.payment = [];

	$scope.loadCart = function(storeid, userid) {
		$http.get("/api/cart/" + storeid + "/" + userid).then(resp => {
			$scope.items = resp.data
		})
	}

	$scope.totalMoney = function() { // lệnh này thì dùng để tính tổng số tiền các mặt hàng trong giỏ
		return $scope.items
			.map(item => item.amount * item.product.price)
			.reduce((total, item) => total += item, 0);
	}

	$scope.add = function(cart) {
		$http.post("/api/cart/add", cart).then(resp => {
			$scope.loadCart($scope.storeid, $scope.userid)
		});
	}

	$scope.update = function(cart) {
		if (cart.amount > 0) {
			$http.put("/api/cart/update", cart).then(resp => {
			});
		} else {
			$scope.delete(cart.id)
		}

	}

	$scope.delete = function(id) {
		const swalWithBootstrapButtons = Swal.mixin({
			customClass: {
				confirmButton: 'btn btn-danger ms-2',
				cancelButton: 'btn btn-success'
			},
			buttonsStyling: false
		})

		swalWithBootstrapButtons.fire({
			title: 'Thông báo',
			icon: 'warning',
			text: "Bạn có chắc muốn xóa sản phẩm này?",
			showCancelButton: true,
			confirmButtonText: 'OK',
			cancelButtonText: 'Quay lại',
			reverseButtons: true,
			showClass: {
				popup: 'animate__animated animate__fadeInDownBig'
			},
			hideClass: {
				popup: 'animate__animated animate__fadeOutUpBig'
			}
		}).then((result) => {
			if (result.isConfirmed) {
				$http.delete("/api/cart/delete/" + id).then(resp => {
					swalWithBootstrapButtons.fire(
						'Đã xóa',
						'Đã xóa sản phẩm!',
						'success'
					)
					$scope.loadCart($scope.storeid, $scope.userid)
				})

			} else if (
				/* Read more about handling dismissals below */
				result.dismiss === Swal.DismissReason.cancel
			) {
				$scope.loadCart($scope.storeid, $scope.userid)
			}
		})
	}
	$scope.loadCart($scope.storeid, $scope.userid)

	$scope.loadShip = function() {
		$http.get("/api/shipping").then(resp => {
			$scope.ship = resp.data
		})
	}

	$scope.loadShip()

	$scope.loadPayment = function() {
		$http.get("/api/payment").then(resp => {
			$scope.payment = resp.data
		})
	}

	$scope.loadPayment()
	//OrderControl

	$scope.pay = function() {
		const swalWithBootstrapButtons = Swal.mixin({
			customClass: {
				confirmButton: 'btn btn-success ms-2',
				cancelButton: 'btn btn-danger'
			},
			buttonsStyling: false
		})

		swalWithBootstrapButtons.fire({
			title: 'Đặt hàng',
			text: "Bạn có chắc muốn đặt hàng?",
			showCancelButton: true,
			confirmButtonText: 'OK',
			cancelButtonText: 'Quay lại',
			reverseButtons: true
		}).then((result) => {
			if (result.isConfirmed) {
				$scope.order = {
					user: { id: $scope.userid },
					store: { id: $scope.storeid },
					status: 1,
					fullname: "",
					address: "",
					phone: "",
					paymentType: {},
					shippingType: {},
					create_at: new Date(),
					update_at: null,
					deleted: false,
					get orderdetail() {
						return $scope.items.map(item => {
							return {
								sp: { id: item.sp.id, soLuong: item.sp.soLuong },
								soLuong: item.soLuong
							}
						})
					}
				}
				swalWithBootstrapButtons.fire(
					'Thành công',
					'Đơn hàng của bạn đang được xử lý',
					'success'
				)
			} else if (
				/* Read more about handling dismissals below */
				result.dismiss === Swal.DismissReason.cancel
			) { }
		})
	}


	// Profile
	//Info
	$scope.updatePhone = function() {
		Swal.fire({
			title: 'Nhập số điện thoại mới',
			input: 'text',
			inputAttributes: {
				autocapitalize: 'off'
			},
			showCancelButton: true,
			confirmButtonText: 'Xác nhận',
			showLoaderOnConfirm: true,
			allowOutsideClick: () => !Swal.isLoading()
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					title: 'Đã cập nhật',
					icon: 'success'
				})
			}
		})
	}

	$scope.updateEmail = function() {
		Swal.fire({
			title: 'Nhập email mới',
			input: 'text',
			inputAttributes: {
				autocapitalize: 'off'
			},
			showCancelButton: true,
			confirmButtonText: 'Xác nhận',
			showLoaderOnConfirm: true,
			allowOutsideClick: () => !Swal.isLoading()
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					title: 'Đã cập nhật',
					icon: 'success'
				})
			}
		})
	}

	$scope.updateProfile = function() {
		Swal.fire({
			icon: 'success',
			title: 'Đã lưu thay đổi',
			showConfirmButton: false,
			timer: 1500
		})
	}

	// Address
	$scope.addressArr = {
		myAddress: [
			{
				"name": 'Nguyễn Văn A',
				"address": 'Cà Mau',
				"phone": '0942.xxx.xxx',
				"status": true
			},
			{
				"name": 'Nguyễn Văn A',
				"address": 'Cần Thơ',
				"phone": '0329.xxx.xxx',
				"status": false
			},
			{
				"name": 'Nguyễn Văn A',
				"address": 'Tp.HCM',
				"phone": '0942.xxx.xxx',
				"status": false
			}
		]
	}

	$scope.editAddress = function() {
		$scope.titleModal = 'Cập nhật địa chỉ'
	}
	$scope.addAddress = function() {
		$scope.titleModal = 'Thêm địa chỉ mới'
	}
	$scope.updateAddress = function() {
		const swalWithBootstrapButtons = Swal.mixin({
			customClass: {
				confirmButton: 'btn btn-success ms-2',
				cancelButton: 'btn btn-danger'
			},
			buttonsStyling: false
		})

		swalWithBootstrapButtons.fire({
			icon: 'info',
			text: "Lưu thay đổi?",
			showCancelButton: true,
			confirmButtonText: 'OK',
			cancelButtonText: 'Quay lại',
			reverseButtons: true
		}).then((result) => {
			if (result.isConfirmed) {
				swalWithBootstrapButtons.fire(
					'Thành công',
					'Đã cập nhật',
					'success'
				)
			} else if (
				/* Read more about handling dismissals below */
				result.dismiss === Swal.DismissReason.cancel
			) { }
		})
	}

	//Voucher
	$scope.allV = true
	$scope.myV = false
	$scope.maxV = false

	$scope.allVoucher = function() {
		$scope.allV = true
		$scope.myV = false
		$scope.maxV = false
	}

	$scope.myVoucher = function() {
		$scope.allV = false
		$scope.myV = true
		$scope.maxV = false
	}

	$scope.maxVoucher = function() {
		$scope.allV = false
		$scope.myV = false
		$scope.maxV = true
	}

	$scope.voucherArr = {
		all: [
			{
				"id": '1',
				"name": 'Giảm 30k',
				"code": 'HELLOCHICKENSGANG'
			},
			{
				"id": '2',
				"name": 'Giảm 120k',
				"code": 'TRIANTHANG10'
			},
			{
				"id": '3',
				"name": 'Giảm 50k',
				"code": 'HELLOCANTHO'
			},
			{
				"id": '4',
				"name": 'Giảm 10k',
				"code": 'HELLOCG'
			},
		],
		my: [
			{
				"id": '1',
				"name": 'Giảm 30k',
				"code": 'HELLOCHICKENSGANG'
			},
			{
				"id": '4',
				"name": 'Giảm 10k',
				"code": 'HELLOCG'
			},
		],
		max: [
			{
				"id": '2',
				"name": 'Giảm 120k',
				"code": 'TRIANTHANG10'
			},
			{
				"id": '3',
				"name": 'Giảm 50k',
				"code": 'HELLOCANTHO'
			}
		]
	}

	$scope.showBtnSave = true
	$scope.saveVoucher = function() {
		$scope.showBtnSave = false
	}

	$scope.order = [];
	// Order manager
	$scope.all = function() {
		$scope.order = [
			{
				id: 'DH100001',
				quantily: 1,
				price: 15000000,
				sales: 10,
				status: 1,
				ship: 0
			},
			{
				id: 'DH100002',
				quantily: 1,
				price: 15000000,
				sales: 10,
				status: 2,
				ship: 0
			},
			{
				id: 'DH100003',
				quantily: 1,
				price: 150000000000000,
				sales: 10,
				status: 3,
				ship: 30000
			},
			{
				id: 'DH100004',
				quantily: 1,
				price: 15000000,
				sales: 10,
				status: 4,
				ship: 0
			},
		]
	}

	$scope.loading = function() {
		$scope.order = [
			{
				id: 'DH100001',
				quantily: 1,
				price: 15000000,
				sales: 10,
				status: 1,
				ship: 0
			},
		]
	}

	$scope.shipping = function() {
		$scope.order = [
			{
				id: 'DH100002',
				quantily: 1,
				price: 15000000,
				sales: 10,
				status: 2,
				ship: 0
			},
		]
	}

	$scope.completed = function() {
		$scope.order = [
			{
				id: 'DH100003',
				quantily: 1,
				price: 150000000000000,
				sales: 10,
				status: 3,
				ship: 30000
			},
		]
	}

	$scope.canceled = function() {
		$scope.order = [
			{
				id: 'DH100004',
				quantily: 1,
				price: 15000000,
				sales: 10,
				status: 4,
				ship: 0
			},
		]
	}



	$scope.all();

})