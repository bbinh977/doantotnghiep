package fpoly.chickens.Implement;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.SessionScope;

import fpoly.chickens.dao.UserAppDAO;
import fpoly.chickens.entity.UserApp;
import fpoly.chickens.service.UserAdminNVService;



@SessionScope
@Service
public class UserAdminNVImplement implements UserAdminNVService {
	@Autowired UserAppDAO userAppDAO;

	@Override
	public List<UserApp> findAll() {
		// TODO Auto-generated method stub
		return userAppDAO.findAll();
	}

	@Override
	public Page<UserApp> findAllPage(Pageable pageable) {
		// TODO Auto-generated method stub
		return userAppDAO.findAll(pageable);
	}

	@Override
	public UserApp create(UserApp user) {
		// TODO Auto-generated method stub
		return userAppDAO.save(user);
	}

	@Override
	public UserApp update(UserApp user) {
		// TODO Auto-generated method stub
		return userAppDAO.saveAndFlush(user);
	}

	@Override
	public void delete(Integer id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<UserApp> findUserByName(String name) {
		// TODO Auto-generated method stub
		return userAppDAO.findByName(name);
	}
	
	@Override
	public List<UserApp> findUserByUserName(String name) {
		// TODO Auto-generated method stub
		return userAppDAO.findUserByUserName(name);
	}

	@Override
	public List<UserApp> sortAZ() {
		// TODO Auto-generated method stub
		return userAppDAO.sortAZ();
	}

	@Override
	public List<UserApp> sortZA() {
		// TODO Auto-generated method stub
		return userAppDAO.sortZA();
	}

	@Override
	public List<UserApp> hoatDong() {
		// TODO Auto-generated method stub
		return userAppDAO.hoatDong();
	}

	@Override
	public List<UserApp> ngungHoatDong() {
		// TODO Auto-generated method stub
		return userAppDAO.ngungHoatDong();
	}

	@Override
	public List<UserApp> loadUserWithDeleted(Boolean deleted) {
		// TODO Auto-generated method stub
		return userAppDAO.loadUserWithDeleted(deleted);
	}

	@Override
	public List<UserApp> findUserByUserNameAndFullName(String username, String fullname) {
		// TODO Auto-generated method stub
		return userAppDAO.findUserByUserNameAndFullName(username, fullname);
	}

	

}