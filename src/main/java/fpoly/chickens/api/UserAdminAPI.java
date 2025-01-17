package fpoly.chickens.api;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import fpoly.chickens.entity.User;
import fpoly.chickens.entity.UserStore;
import fpoly.chickens.service.UploadService;
import fpoly.chickens.service.UserAdminService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/user")
public class UserAdminAPI {
	@Autowired
	UserAdminService userAdminService;
	@Autowired
	UploadService uploadService;

	// Load
	@GetMapping
	public List<User> findAll() {
		return userAdminService.findAll();
	}

	// Load
	@GetMapping("deleted/{deleted}")
	public List<User> loadUserWithDeleted(@PathVariable("deleted") Optional<Boolean> deleted) {
		return userAdminService.loadUserWithDeleted(deleted.get());
	}

	// Create
	@PostMapping
	public ResponseEntity<User> create(@RequestBody Optional<User> user) {
		if (user.isPresent()) {
			userAdminService.create(user.get());
		}

		return ResponseEntity.ok().build();
	}

	// Update
	@PutMapping("{id}")
	public ResponseEntity<Void> update(@PathVariable("id") Optional<String> id, @RequestBody User user) {
		userAdminService.update(user);

		return ResponseEntity.ok().build();
	}

	// Delete
	@DeleteMapping("{id}")
	public void delete(@PathVariable("id") Integer id) {
		userAdminService.delete(id);
	}

	// LoadUserStore by ID
	@GetMapping("/get-user-store/{userStoreID}")
	public ResponseEntity<Optional<UserStore>> LoadUserStoreByID(@PathVariable("userStoreID") Optional<Integer> userStoreID) {
		return ResponseEntity.ok(userAdminService.findUserByID(userStoreID.get()));
	}
	
	// Find by name
	@GetMapping("/{nameUser}")
	public ResponseEntity<List<User>> findByName(@PathVariable("nameUser") Optional<String> nameUser) {
		return ResponseEntity.ok(userAdminService.findUserByName("%" + nameUser.get() + "%"));
	}

	// Find by user name
	@GetMapping("id/{nameUserName}")
	public ResponseEntity<List<User>> findByUserName(@PathVariable("nameUserName") Optional<String> nameUser) {
		return ResponseEntity.ok(userAdminService.findUserByUserName("%" + nameUser.get() + "%"));
	}

	// Find by user name
	@GetMapping("id/name/{nameUserName}/{nameUser}")
	public ResponseEntity<List<User>> findByUserNameAndFullName(
			@PathVariable("nameUserName") Optional<String> nameUserName,
			@PathVariable("nameUser") Optional<String> nameUser) {
		return ResponseEntity.ok(userAdminService.findUserByUserNameAndFullName("%" + nameUserName.get() + "%",
				"%" + nameUser.get() + "%"));
	}
	
	// Find by user name
	@GetMapping("id/user/{nameUsername}")
	public ResponseEntity<List<User>> findByUsername(@PathVariable("nameUsername") Optional<String> nameUser) {
		return ResponseEntity.ok(userAdminService.findUserByUserName(nameUser.get()));
	}
		
	// Find by Email
	@GetMapping("email/{nameEmail}")
	public ResponseEntity<List<User>> findByEmail(@PathVariable("nameEmail") Optional<String> nameEmail) {
		return ResponseEntity.ok(userAdminService.findUserByEmail(nameEmail.get()));
	}
	
	@GetMapping("email/{nameEmail}/{id}")
	public ResponseEntity<List<User>> findByEmail(@PathVariable("nameEmail") Optional<String> nameEmail,
			@PathVariable("id") Optional<Integer> id) {
		return ResponseEntity.ok(userAdminService.findUserByEmailForId(nameEmail.get(), id.get()));
	}
		
	// Find by Email
	@GetMapping("phone/{phone}")
	public ResponseEntity<List<User>> findByPhone(@PathVariable("phone") Optional<String> phone) {
		return ResponseEntity.ok(userAdminService.findUserByPhone(phone.get()));
	}

	@GetMapping("phone/{phone}/{id}")
	public ResponseEntity<List<User>> findByPhone(@PathVariable("phone") Optional<String> phone,
			@PathVariable("id") Optional<Integer> id) {
		return ResponseEntity.ok(userAdminService.findUserByPhoneForId(phone.get(), id.get()));
	}

	// Sort A-Z
	@GetMapping("/sort/a-z")
	public List<User> sortAZ() {
		return userAdminService.sortAZ();
	}

	// Sort A-Z
	@GetMapping("/sort/z-a")
	public List<User> sortZA() {
		return userAdminService.sortZA();
	}

	// Sort A-Z
	@GetMapping("/sort/0-9")
	public List<User> sort09() {
		return userAdminService.hoatDong();
	}

	// Sort A-Z
	@GetMapping("/sort/9-0")
	public List<User> sort90() {
		return userAdminService.ngungHoatDong();
	}
}
