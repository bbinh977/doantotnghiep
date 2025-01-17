package fpoly.chickens.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Store")
public class Store {
	
	@Id
	@Column(name = "Id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer Id;
	
	@Column(name = "Name")	
	private String Name;
	
	@ManyToOne
	@JoinColumn(name = "Userstoreid")
	UserStore UserstoreId;
	
	@Column(name = "Address")
	private String Address;	
	
	@Column(name = "Phone")
	private String Phone;
	
	@Column(name = "Enddate")
	private Date Enddate;	
	
	@Column(name = "Image")
	private String Image;
	
	@Column(name = "Create_at")
	private Date Create_at;
	
	@Column(name = "Update_at")
	private Date Update_at;
	
	@Column(name = "Deleted")
	private Boolean Deleted;

	

}
